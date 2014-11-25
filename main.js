define(function (require, exports, module) {
       'use strict'; 

       var CodeMirror = brackets.getModule('thirdparty/CodeMirror2/lib/codemirror'),
           ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
           ThemeManager = brackets.getModule('view/ThemeManager'); 

       // add language specific classes for fine grain styling
       CodeMirror.defaults.addModeClass = true; 

       // add the theme to ThemeManager
       ThemeManager.loadFile(ExtensionUtils.getModulePath(module, 'theme/') + 'main.less', {
              name: 'visual-studio-dark',
              title: 'Visual Studio Dark',
              dark: true
       }); 
});
