
function arrangeKeywordsCircularly(centerElement, keywords) {
    const radius = 150; // radius of the circle
    const centerX = centerElement.offsetLeft + centerElement.offsetWidth / 2;
    const centerY = centerElement.offsetTop + centerElement.offsetHeight / 2;

    const angleIncrement = 2 * Math.PI / keywords.length;

    keywords.forEach((keywordDiv, index) => {
        const angle = angleIncrement * index;
        const x = centerX + radius * Math.cos(angle) - keywordDiv.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - keywordDiv.offsetHeight / 2;

        keywordDiv.style.position = 'absolute';
        keywordDiv.style.left = x + 'px';
        keywordDiv.style.top = y + 'px';
    });
}
document.getElementById('submit-button').addEventListener('click', function() {
    // キーワードの取得
    var keyword = document.getElementById('keyword-input').value;
    
    // TODO: ここで実際のAI処理を行い、関連キーワードを取得
    var suggestedKeywords = mockSuggestKeywords(keyword);
    
    // 提案キーワードの表示
    var suggestedDiv = document.getElementById('suggested-keywords');
    suggestedDiv.innerHTML = '';
    suggestedKeywords.forEach(function(kw) {
        var keywordDiv = document.createElement('div');
        keywordDiv.textContent = kw;
        suggestedDiv.appendChild(keywordDiv);
    });
    
    
    // Get the center element (the main keyword)
    var centerElement = document.getElementById('keyword-input');
    // Arrange the suggested keywords circularly around the main keyword
    arrangeKeywordsCircularly(centerElement, Array.from(suggestedDiv.children));
    
});

function mockSuggestKeywords(keyword) {
    // この関数はデモのためのもので、実際のAI処理を模倣します。
    var sampleKeywords = {
        "音楽": ["ロック", "ジャズ", "クラシック", "ポップ"],
        "映画": ["アクション", "ロマンス", "ホラー", "ドキュメンタリー"],
        "料理": ["和食", "中華", "イタリアン", "フレンチ"]
    };
    return sampleKeywords[keyword] || [];
}