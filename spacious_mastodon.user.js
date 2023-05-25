// ==UserScript==
// @name         Spaceous Mastodon/glitch-soc Helper
// @namespace    github.com/RiedleroD/userstyles-riedler
// @version      1.2.1
// @description  companion script for spaceous mastodon userstyle
// @author       Riedler
// @match        http://*/*
// @match        https://*/*
// @icon         https://riedler.wien/resource/rwicons/mstdn.svg
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    let mode = null;
    if(document.getElementById('mastodon') !== null){
        mode = 'vanilla'
        if(document.body.classList.contains('flavour-glitch')){
            mode = 'glitch-soc';
        }
    }else{
        return;
    }

    var MINPOSTSIZEFORSIDEBAR;
    switch(mode){
        case 'vanilla':
            MINPOSTSIZEFORSIDEBAR = 12;
            break;
        case 'glitch-soc':
            MINPOSTSIZEFORSIDEBAR = 17;
            break;
    }

    console.log(`spacious mastodon helper running in ${mode} mode`);

    function checkSideBar(post){
        let content = post.getElementsByClassName('status__content')[0];
        if(content === undefined){
            //TODO: check why glitch-soc does this sometimes, and vanilla doesn't
            return;
        }
        //get minimum height by getting the minimum post size in px
        let divisor = MINPOSTSIZEFORSIDEBAR*parseFloat(getComputedStyle(post).fontSize);
        let actionbar = post.getElementsByClassName('status__action-bar')[0];
        if(content.clientHeight>=divisor){
            actionbar.classList.add('sm__force_sidebar');
        }else{
            //if we previously added it and it changed in the meantime
            actionbar.classList.remove('sm__force_sidebar');
        }
    }
    function isPost(element){
        return element.classList!=undefined && element.classList.contains('status');
    }

    const target = document.getElementById('mastodon');
    const obconf = { attributes: false, childList: true, subtree: true };

    const callback = (mutationList, observer) => {
        for(const mutation of mutationList){
            for(let node of mutation.addedNodes){
                if(isPost(node)){
                    checkSideBar(node);
                }else{
                    //checking parents for posts
                    do{
                        node=node.parentNode;
                        if(isPost(node)){
                            checkSideBar(node);
                            return;
                        }
                    }while(node.parentNode!=undefined);
                    //checking children for posts
                    for(const e of node.getElementsByClassName('status')){
                        checkSideBar(e);
                    }
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(target, obconf);
})();