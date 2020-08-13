$(document).ready( function(){
	$('#passWord, #confirmPass').on('keyup', function () {
		if ($('#passWord').val() == $('#confirmPass').val()) {
			$('.passConfirmedMsg').html('<i class="fas fa-check"></i>').css('color', '#7ac943');
		} else 
			$('.passConfirmedMsg').html('<i class="fas fa-times"></i>').css('color', '#f04826');
	});
	
	
	if($('.fixedHeader').length){
		$('.fixedHeader').DataTable( {
			"fixedHeader": {
			  header: true,
			},
			"bLengthChange": false,
			"Filter": false,
			"scrollY": 320,
			"Info": false,
		});
	}
	if($('.datePicker').length){
		$.datepicker.setDefaults({
		  showOn: "both"
		  ,dateFormat:"dd/mm/yy"
		  ,changeMonth: true
		  ,changeYear: true
		  //,buttonImage: "images/calendar.png"
		 //,buttonImageOnly: true
		  ,shortYearCutoff: 50
		  ,buttonText: "<span class='sprite calIcon'></span>"
		  ,beforeShow: function (textbox, instance) {
			instance.dpDiv.css({
				marginTop: /*(textbox.offsetHeight)*/ 0 + 'px'
				,marginLeft: 0 + 'px'
			});
			}
		});		
		$( ".datePicker input" ).datepicker({
			   dateFormat:"dd/mm/yy"
			   ,showOn: "both"
			   ,buttonText: "<span class='sprite calIcon'></span>"
			   ,shortYearCutoff: 50
			 //,buttonImage: "images/calendar.png"
			 //,buttonImageOnly: true
			   ,beforeShow: function (textbox, instance) {
				instance.dpDiv.css({
						marginTop: /*(textbox.offsetHeight)*/ 0 + 'px'
						,marginLeft: 0 + 'px'
						});
				}
		  });	
	}
	
	$(".navIcon ").click(function(){
		if($(this).parent().hasClass("activate")){
			$(this).parent().removeClass("activate");			
		}
		else{
			//$(this).parent().siblings().removeCalss("activate");
			$(this).parent().addClass("activate").siblings().removeClass('activate');	
		}
	});
	$(".userImage").click(function(){
		if($(this).parent().hasClass("toggleOpen")){
			$(this).parent().removeClass("toggleOpen");			
		}
		else{
			//$(this).parent().siblings().removeCalss("activate");
			$(this).parent().addClass("toggleOpen").siblings().removeClass('toggleOpen');	
		}
	});
	$(".navigation-trigger").click(function(){
			if($(window).width() < 1200){
				if($(".sideBar").hasClass("mobileMenu1")){
					$(".sideBar").removeClass("mobileMenu1");		
				}
				else{
					$(".sideBar").addClass("mobileMenu1");		
				}
				}
				else{
					$(".sideBar").removeClass("mobileMenu1");
				}

		})
	
	if ($(".inputContols,.formControls, .datePicker input").length) {
		$('.inputContols input, .inputContols textarea, .formControls input, .formControls textarea, .datePicker input').focusout(function() {
			var text_val = $(this).val();
			if (text_val === "") {
				$(this).removeClass('hasValue');
			} else {
				$(this).addClass('hasValue');
			}
		});
		var input_selector = ".inputContols, .datePicker input";
		$(document).on('change', input_selector, function() {
			var text_val = $(this).val();
			if (text_val === "") {
				$(this).removeClass('hasValue');
			} else {
				$(this).addClass('hasValue');
			}
		});
	}
	
	if ($("#customerName").length) {
		var text_val = $(this).val();
		var input_selector = '#customerName';
		$(document).on('keyup', input_selector, function() {
			var text_val = $(this).val();
			if (text_val === "") {
				$(".searchResultSection").removeClass('showIt');
			} else {
				$(".searchResultSection").addClass('showIt');
			}
		});
		
		/*$("#customerName").keypress(function() {
			if($(this).val().length > 2) {
				 $(".searchResultSection").addClass('showIt');
			} else {
				 $(".searchResultSection").removeClass('showIt');
			}
		});*/
		
	}
	if( $(".noGrant").length){
		$(".switch-label").on("click", function(){
			if($(this).hasClass("switch-label-on")){
				$(this).parent().addClass("swipeNo");			
			}
			else{
				$(this).parent().removeClass("swipeNo");				
			}
		});
	}
	if($(".customSelect").length){
		$(".customSelect").customSelect();
	}

	var toggler = document.querySelector('.toggle-switch');
		toggler.onclick = function(){
		toggler.classList.toggle('active');
	}

	// Responsive Table
	if( $(".responsiveTable").length){
		$(".responsiveTable").each(function(){		
		$(this).find('td').removeAttr('width');
		//$(this).find('td').removeAttr('align');
		var head_col_count =  $(this).find('tr th').size();
		// loop which replaces td
		for ( i=0; i <= head_col_count; i++ )  {
			// head column label extraction
			var head_col_label = $(this).find('tr th:nth-child('+ i +')').text();
			// replaces td with <div class="column" data-label="label">
			$(this).find('tr td:nth-child('+ i +')').attr("data-label", head_col_label);
		}
		});
	};	
});
$(window).on('resize', function () {
	  			   
});