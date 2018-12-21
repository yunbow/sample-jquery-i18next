(function () {
    $(function () {
        setLang('en');

        $('#lang').on('change', function () {
            var lang = $('#lang').val();
            setLang(lang);
        });
    });

    function setLang(lang) {
        log('lang=' + lang);

        i18next.use(i18nextXHRBackend).init({
            backend: {
                loadPath: 'locales/{{lng}}/string.json'
            },
            debug: false,
            defaultLng: 'en',
            fallbackLng: false,
            lng: lang,
        }, function (err, t) {
            jqueryI18next.init(i18next, $, {
                useOptionsAttr: true
            });
            $('[data-i18n]').localize();
        });
    }

})();