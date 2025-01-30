chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.update(tab.id, { url: "https://en.wikipedia.org/wiki/Special:Random" });
});
/*<!DOCTYPE html>
<html>
<head>
    <title>Wikipedia Randomiser</title>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- https://en.wikipedia.org/wiki/Special:Random -->
    <a href="https://en.wikipedia.org/wiki/Special:Random">
        <img src="button.png" alt="Random Wikipedia Article">
    </a>
</html>*/