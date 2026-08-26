/* ===========================================================================
   إعدادات الموقع — هذا هو الملف الوحيد الذي تعدّله لضبط النموذج
   Site settings — the only file you edit to configure the contact form
   =========================================================================== */

window.SITE_CONFIG = {

  // ضع هنا مفتاح Web3Forms (سجّل مجاناً في web3forms.com ببريدك)
  // Paste your Web3Forms access key here.
  WEB3FORMS_KEY: "05bf94a5-653d-4ba7-9128-d55fb25010c2",

  // عنوان الرسالة التي تصلك بالبريد
  SUBJECT: "New enquiry from your website",

};

/* --------------------------------------------------------------------------
   لا تحتاج تعديل ما تحت هذا السطر
   Nothing below needs editing.
   -------------------------------------------------------------------------- */
(function () {
  var cfg = window.SITE_CONFIG || {};

  document.querySelectorAll('form[action*="web3forms"]').forEach(function (form) {
    var key = form.querySelector('input[name="access_key"]');
    if (key) key.value = cfg.WEB3FORMS_KEY || "";

    var subject = form.querySelector('input[name="subject"]');
    if (subject && cfg.SUBJECT) subject.value = cfg.SUBJECT;

    // If no key is configured yet, don't let a visitor submit into a void —
    // hand them the email client instead so an enquiry is never lost.
    if (!cfg.WEB3FORMS_KEY) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var get = function (n) {
          var el = form.querySelector('[name="' + n + '"]');
          return el ? el.value : "";
        };
        var body =
          "Name: " + get("name") + "\n" +
          "Email: " + get("email") + "\n" +
          "Phone: " + get("phone") + "\n" +
          "Company: " + get("company") + "\n" +
          "Service: " + get("service_id") + "\n" +
          "Budget: " + get("budget") + "\n\n" +
          get("message");
        window.location.href =
          "mailto:m.abdalgader@outlook.com" +
          "?subject=" + encodeURIComponent("Website enquiry from " + get("name")) +
          "&body=" + encodeURIComponent(body);
      });
    }
  });
})();
