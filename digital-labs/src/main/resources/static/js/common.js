// navbar
    !function (a) {
        "use strict";
        a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = a(this.hash);
                if ((
                    e = e.length
                        ? e
                        : a("[name=" + this.hash.slice(1) + "]")
                ).length) 
                    return a("html, body").animate({
                        scrollTop: e
                            .offset()
                            .top - 48
                    }, 1e3, "easeInOutExpo"),
                    !1
            }
        }),
        a(".js-scroll-trigger").click(function () {
            a(".navbar-collapse").collapse("hide")
        }),
        a("body").scrollspy({offset: 54, target: "#mainNav"});
        var e = function () {
            a("#mainNav")
                .offset()
                .top > 100
                    ? a("#mainNav").addClass("navbar-shrink")
                    : a("#mainNav").removeClass("navbar-shrink")
        };
        e(),
        a(window).scroll(e)
    }(jQuery);


// back-to-top
(function(){
    // Back to Top - by CodyHouse.co
    var backTop = document.getElementsByClassName('js-cd-top')[0],
        // browser window scroll (in pixels) after which the "back to top" link is shown
        offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offsetOpacity = 1200,
        scrollDuration = 700
        scrolling = false;
    if( backTop ) {
        //update back to top visibility on scrolling
        window.addEventListener("scroll", function(event) {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
            }
        });
        //smooth scroll to top
        backTop.addEventListener('click', function(event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        ( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
        ( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
        scrolling = false;
    }
    
    function scrollTop(duration) {
        var start = window.scrollY || document.documentElement.scrollTop,
            currentTime = null;
            
        var animateScroll = function(timestamp){
            if (!currentTime) currentTime = timestamp;        
            var progress = timestamp - currentTime;
            var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
            window.scrollTo(0, val);
            if(progress < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        };

        window.requestAnimationFrame(animateScroll);
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    //class manipulations - needed if classList is not supported
    function hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    function addClass(el, className) {
        var classList = className.split(' ');
        if (el.classList) el.classList.add(classList[0]);
        else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
        if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
    }
    function removeClass(el, className) {
        var classList = className.split(' ');
        if (el.classList) el.classList.remove(classList[0]);	
        else if(hasClass(el, classList[0])) {
            var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
            el.className=el.className.replace(reg, ' ');
        }
        if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
    }
})();    

// Scroll Up
$('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1500);
    e.preventDefault();
});

// $(window).scroll(function() {
// if ($(this).scrollTop() > 100) {
// $('.menu-top').addClass('menu-shrink');
// } else {
// $('.menu-top').removeClass('menu-shrink');
// }
// });

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

////parallax
//$(window).stellar({
//    horizontalScrolling: false,
//    responsive: true/*,
//     scrollProperty: 'scroll',
//     parallaxElements: false,
//     horizontalScrolling: false,
//     horizontalOffset: 0,
//     verticalOffset: 0*/
//});



// smoothwheel
    $('a').click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
    });

    $(function() {
        console.log( "ready!" );
        $('#btnSend').click(function() {
        			if($('#defaultCheck1').prop('checked')) {
        				var formData = {}
	                formData.type = $('#exampleSelect1').val();
	                formData.name = $('#name').val();
	                formData.email = $('#email').val();
	                formData.subject = $('#Subject').val();
	                formData.message = $('#message').val();
	                
	                if(formData.name == "") {
	                		alert("이름을 입력하세요.");
	                		return;
	                } else if(formData.email == "") {
	                		alert("이메일을 입력하세요.");
	                		return;
	                } else if(formData.subject == "") {
	                		alert("제목을 입력하세요.");
	                		return;
	                } else if(formData.message == "") {
	                		alert("메세지를 입력하세요");
	                		return;
	                }
	                
	                var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                	
	                
	                if(formData.email.match(regExp) != null) {
	                } else {
	                		alert("올바른 이메일을 입력하세요.");
	                		return;
	                }
	                
	                console.log("btnSend click() : data = " + JSON.stringify(formData));
	                
	                $.post("/email", formData, function(data) {
	                    console.log("success : data =" + data);
	                    if(data == "success") {
	                        alert("문의사항이 접수 되었습니다. 빠른시일내에 답변 드리겠습니다. 감사합니다.")
	                    } else {
	                        alert("문의사항 접수에 실패하였습니다. 다시 시도해주세요.")
	                    }
	                        
	                });
        			} else {
        				alert("개인정보 활용에 동의해주세요.");
        			}
        });
    });    

