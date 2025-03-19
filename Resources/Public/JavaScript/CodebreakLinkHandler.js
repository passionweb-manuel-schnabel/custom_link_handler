define(['jquery', 'TYPO3/CMS/Recordlist/LinkBrowser'], function($, LinkBrowser) {
    'use strict';

    /**
     *
     * @type {{}}
     * @exports Passionweb/CustomLinkHandler/CodebreakLinkHandler
     */
    var CodebreakLinkHandler = {};

    $(function() {
        $('#codebreakfilter').on('submit', function(event) {
            event.preventDefault();

            var value = $(this).find('[name="codebreakfilter"]').val();
            if (value === 'codebreak:') {
                return;
            }
            if (value.indexOf('codebreak:') === 0) {
                value = value.substr(7);
            }
            LinkBrowser.finalizeFunction('codebreak:' + value);
        });
    });

    return CodebreakLinkHandler;
});
