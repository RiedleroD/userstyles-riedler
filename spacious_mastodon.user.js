// ==UserScript==
// @name         Spaceous Mastodon Helper
// @namespace    github.com/RiedleroD/userstyles-riedler
// @version      1.2.0
// @description  companion script for spaceous mastodon userstyle
// @author       Riedler
// @match        https://mas.to/*
// @icon         https://mas.to/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    console.log("me alive");

    function checkSideBar(post){
        let content = post.getElementsByClassName('status__content')[0];
        //get minimum height by getting 15em in px
        let divisor = 12*parseFloat(getComputedStyle(post).fontSize);
        if(content.clientHeight>=divisor){
            post.getElementsByClassName('status__action-bar')[0]
                .classList.add('sm__force_sidebar');
        }
    }

    const target = document.getElementById('mastodon');
    const obconf = { attributes: false, childList: true, subtree: true };

    const callback = (mutationList, observer) => {
        for(const mutation of mutationList){
            for(const node of mutation.addedNodes){
                if(node.classList.contains('status')){
                    checkSideBar(node);
                }else{
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