$(function() {
	var category;
	var action;
	var label;

	send('index', 'entered', 'index_entered');

	// navvar, footer 처리 처리
	$('a').click(function() {
		var text = $(this).text();
		var isFooter = $('.footer-col').has(this).length != 0 ? true : false

		category = '글로벌 네비게이션바';
		
		if (text == 'Home') {
			action = 'home_click';
			label = 'home';
		} else if (text == 'About') {
			action = 'about_click';
			label = 'about';
		} else if (text == 'Specialists') {
			action = 'specials_click';
			label = 'specials';
		} else if (text == 'Contact') {
			action = 'contact_click';
			label = 'contact';
		} else if (text == 'blog' || text == 'Blog') {
			action = 'blog_click';
			label = 'blog';
		} else if (text == 'Cloud') {
			action = 'Labs_cloud_click';
			label = 'cloud';
		} else if (text == 'Data') {
			action = 'Labs_data_click';
			label = 'data';
		} else if (text == 'Blockchain') {
			action = 'Labs_blockchain_click';
			label = 'blockchain';
		} else if (text == 'AI') {
			action = 'Labs_ai_click';
			label = 'ai';
		} else if (text.replace(/\s/g, "") == 'logo') {
			category = '로고';
			action = 'logo_click';
			label = 'logo';
		} else {
			return;
		}

		if (text != 'Home' && isFooter) {
			category = 'Footer';
			action = 'ft_' + action;
			label = 'ft_' + label;
		}

		send(category, action, label)
	});

	// navvar, footer labs 메뉴 선택 처리
	$('span.dropdown-toggle').click(function(e) {
		send('글로벌 네비게이션바', 'Labs_click', 'labs');
	});

	// top으로 가기 처리
	$("a:contains('back-top-top')").click(function() {
		send('top', 'top_click', 'top');
	});

	$("a:contains('지금 연락주세요.')").click(function() {
		var index = $("a:contains('지금 연락주세요.')").index(this) + 1;

		category = '지금 연락주세요 버튼' + index;
		action = 'contact' + index + '_btn_click';
		label = 'contact 이동_' + index;

		send(category, action, label);
	});

	// map 선택
	// index 화면에서만 사용
	$("#map-canvas").click(function() {
		send('Map', 'map_click', '지도 선택');
	});

	// contents link
	// index 화면에서만 사용
	$("#cloud_link").click(function() {
		send('Contents', 'cloud_click', 'cloud 과정 안내');
	});
	$("#data_link").click(function() {
		send('Contents', 'data_click', 'data 과정 안내');
	});
	$("#blockchain_link").click(function() {
		send('Contents', 'blockchain_clic', 'blockchain 과정 안내');
	});
	$("#ai_link").click(function() {
		send('Contents', 'ai_click', 'ai 과정 안내');
	});

	// 문의하기 form 처리
	$('#exampleSelect1').click(function() {
		send('contact', 'equest_type_click', '문의종류 선택');
	});
	$('#name').click(function() {
		send('contact', 'name_click', '이름 입력');
	});
	$('#email').click(function() {
		send('contact', 'email_click', '	이메일 입력');
	});
	$('#Subject').click(function() {
		send('contact', 'title_click', '제목 입력');
	});
	$('#message').click(function() {
		send('contact', 'message_click', '메시지 입력');
	});
	$('#defaultCheck1').click(function() {
		send('contact', 'agreement_check', '이용동의 체크');
	});
	$('#btnSend').click(function() {
		send('contact', 'msg_send_click', '메시지 보내기');
	});

	// youtube paly/stop
	// index 화면에서만 사용
	window.isFirstPlay = true;
	window.onYouTubeIframeAPIReady = function() {
		category = 'Video';

		player = new YT.Player('youtubePlayer', {
			events : {
				'onStateChange' : function(event) {
					if (event.data == YT.PlayerState.PAUSED) {// 일시중지
						action = 'pause';
						label = 'video_pause';
					} else if (event.data == YT.PlayerState.PLAYING) {// 시작
						if (isFirstPlay) {
							isFirstPlay = false;
							return;
						} else {
							action = 'play';
							label = 'video_play';
						}

					}
					send(category, action, label);
				}
			}
		});
	}

	// 추천문구 처리
	$('li[data-target$="#review"]').click(function() {
		var index = Number($(this).attr('data-slide-to')) + 1;

		category = 'Testimonial';
		action = 'Testimonial' + index + '_click';
		label = 'Testimonial' + index;

		send(category, action, label);
	});

	var disappear = new Array();
	$('section').each(function() {
		disappear.push($(this).attr('id'));
	});
	
	$('section').appear(function() {
	});
	
	$(document.body).on('appear', '', function(e, $affected) {
		$affected.each(function() {
			var id = $(this).attr('id');
			var index = disappear.indexOf(id);
			
			if(index != -1) {
				disappear.splice(index, 1)
				
				send('index', 'scroll_' + id, 'index_scroll_' + id);
			}
			
		})
	});
	
	// AccuInsight 선택
	// blockchain 화면에서만 사용
	$('a:contains("AccuInsight+ 자세히 보기")').click(function() {
		category = 'AccuInsight+자세히보기';
		action = 'accuinsight_btn_click';
		label = 'accuinsight_이동';

		send(category, action, label);
	});

	function send(category, action, label) {
		// ga('send', 'event', category, action, label, 0);
		console.log(category, action, label)
		gtag('event', action, {
			'event_category' : category,
			'event_label' : label
		})
	}
});

function hello() {
	alert(1)
}