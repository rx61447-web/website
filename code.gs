function doGet() {
  return HtmlService.createTemplateFromFile('amicute')
      .evaluate()
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setTitle('我的專屬網頁')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
