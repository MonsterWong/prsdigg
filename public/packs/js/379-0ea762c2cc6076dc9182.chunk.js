(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{654:function(s,n){var a,e;a=Prism,e=["([\"'])(?:\\\\[^]|\\$\\([^)]+\\)|`[^`]+`|(?!\\1)[^\\\\])*\\1","<<-?\\s*([\"']?)(\\w+)\\2\\s[^]*?[\r\n]\\3"].join("|"),a.languages["shell-session"]={info:{pattern:/^[^\r\n$#*!]+(?=[$#])/m,alias:"punctuation",inside:{path:{pattern:/(:)[\s\S]+/,lookbehind:!0},user:/^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,punctuation:/:/}},command:{pattern:RegExp("[$#](?:[^\\\\\r\n'\"<]|\\\\.|<<str>>)+".replace(/<<str>>/g,(function(){return e}))),greedy:!0,inside:{bash:{pattern:/(^[$#]\s*)[\s\S]+/,lookbehind:!0,alias:"language-bash",inside:a.languages.bash},"shell-symbol":{pattern:/^[$#]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},a.languages["sh-session"]=a.languages.shellsession=a.languages["shell-session"]}}]);
//# sourceMappingURL=379-0ea762c2cc6076dc9182.chunk.js.map