$(function(){
   
   new Line().create();
   
   $("#addLineBtn").click(function(){
      new Line().create();
   });
   
});

function Line(){
	this.$note = null;	
}

var cnt = 0;

// create()
Line.prototype.create = function(){   
   
   // ////////////////// 아코디언 타입 //////////////////////
   var $str = `<div class="accordion-group widget-box" id="widget-box">
                     <div class="accordion-heading">
                        <div class="widget-title">
                           <a href="#collapse`;
   cnt++;
   $str += cnt;
   $str += `"
   data-toggle="collapse"> <span class="icon"><i
   class="icon-magnet"></i></span>
      <h5>라인</h5>
         </a> 
            <span class="icon2">
            	
               	<button class="removeLineBtn"><i class="far fa-trash-alt"></i></button>
            </span>
            

         </div>
      </div>
      <div class="collapse in accordion-body" id="collapse`
   $str += cnt;
   $str +=`">
        <div class="widget-content">
            <div class="row1">            
               <div class="lineAll">
                  <label> 입력 데이터 타입  </label> 
                  <select data-type="param" data-param-name="inputType" class = "selectInputBox">
                     <option value="0">숫자/문자 </option>
                     <option value="1">배열 </option>
                     <option value="2">트리</option>
                     <option value="3">그래프</option>
                  </select>
               </div>
         <div class="lineLeft">
            <label> 숫자/문자 개수 </label> 
            <input type="text" placeholder="숫자 개수" style="width: 75%">
         </div>
         <div class="lineRight">
         <label> 전체 개수 출력 여부  </label> 
         <select data-type="param" data-param-name="includeNTestCasesFlag" style="width: 75%">
         <option value="0">False</option>
         <option value="1">True</option>
         </select>
         </div>
            <div class="lineAll">
                  <label> 숫자/문자 타입  </label> 
                  <select data-type="param" data-param-name="inputType" class = "selectDataBox">
                     <option value="int">Int</option>
                     <option value="double">Double</option>
                     <option value="char">Char</option>
                     <option value="string">String</option>
                </select>
            </div>

            <div class="lineLeft">
               <label> 숫자/문자 최소값 </label> <input type="text" placeholder="최소값" style="width: 75%">
            </div>

            <div class="lineRight">
               <label> 숫자/문자 최대값 </label> <input type="text" placeholder="최대값" style="width: 75%">
            </div>

         </div>
      </div>
      </div>
      </div>
      `
   $('.accordion').append($str);
   
}


$(document).on("click", ".removeLineBtn", function() {
	       
	$(this).closest("#widget-box").remove();
	      
});


$(document).on("change",".selectInputBox", function(){
	         var selectValue = $("option:selected",this).val();
	         
	         console.log($(this));
	         console.log($(this).parent());
	         console.log($(this).parent().parent());
	         
	         $(this).parent().nextAll().remove(); // 이후 요소 일단 다 제거
	         
	         var pr = $(this).parent().parent();
	         switch(selectValue){
	            case "0" : // 숫자/문자
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(1).append($('<label> 숫자/문자 개수 </label>'));
	               pr.children().eq(1).append($('<input type="text" placeholder="개수" style="width: 75%">'));
	                       
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 전체 개수 출력 여부 </label>'));
	               pr.children().eq(2).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(2).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(2).children().eq(1).append($('<option value="true">True</option>'));
	               
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(3).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(3).append($('<select data-type="param" style="width: 75%" class = "selectDataBox">'));
	               pr.children().eq(3).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(3).children().eq(1).append($('<option value="double">Double</option>'));
	               pr.children().eq(3).children().eq(1).append($('<option value="string">String</option>'));
	               pr.children().eq(3).children().eq(1).append($('<option value="char">Char</option>'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(4).append($('<label> 숫자/문자 최소값 </label>'));
	               pr.children().eq(4).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(5).append($('<label> 숫자/문자 최대값 </label>'));
	               pr.children().eq(5).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	               
	               break;
	            case "1" : // Array
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(1).append($('<label> 차원 수 </label>'));
	               pr.children().eq(1).append($('<input type="text" placeholder="차원 수" style="width: 75%">'));

	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 중복 값 여부 </label>'));
	               pr.children().eq(2).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(2).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(2).children().eq(1).append($('<option value="true">True</option>'));

	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(3).append($('<label> 행 최소값 </label>'));
	               pr.children().eq(3).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(4).append($('<label> 행 최대값 </label>'));
	               pr.children().eq(4).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(5).append($('<label> 열 최소값 </label>'));
	               pr.children().eq(5).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(6).append($('<label> 행 최대값 </label>'));
	               pr.children().eq(6).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(7).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(7).append($('<select data-type="param" style="width: 75%" class = "selectDataBox">'));
	               pr.children().eq(7).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(7).children().eq(1).append($('<option value="double">Double</option>'));
	               pr.children().eq(7).children().eq(1).append($('<option value="string">String</option>'));
	               pr.children().eq(7).children().eq(1).append($('<option value="char">Char</option>'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(8).append($('<label> 최소값 </label>'));
	               pr.children().eq(8).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(9).append($('<label> 최대값 </label>'));
	               pr.children().eq(9).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	               
	               break;
	            case "2" : // Tree
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(1).append($('<label> 노드 개수 </label>'));
	               pr.children().eq(1).append($('<input type="text" placeholder="노드 개수" style="width: 75%">'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(2).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(2).append($('<select data-type="param" style="width: 75%" class = "selectTypeBox">'));
	               pr.children().eq(2).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(2).children().eq(1).append($('<option value="char">char</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(3).append($('<label> 정점 시작 번호 </label>'));
	               pr.children().eq(3).append($('<input type="text" placeholder="시작 번호 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(4).append($('<label> 가중치 여부  </label>'));
	               pr.children().eq(4).append($('<select data-type="param" style="width: 75%" class = "selectWeightBox">'));
	               pr.children().eq(4).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(4).children().eq(1).append($('<option value="true">True</option>'));
	               
	               break;
	            case "3" : // Graph
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(1).append($('<label> 정점 개수 </label>'));
	               pr.children().eq(1).append($('<input type="text" placeholder="정점 개수" style="width: 75%">'));
	                
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 간선 개수 </label>'));
	               pr.children().eq(2).append($('<input type="text" placeholder="간선 개수" style="width: 75%">'));
	                     
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(3).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(3).append($('<select data-type="param" style="width: 75%" class = "selectTypeBox">'));
	               pr.children().eq(3).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(3).children().eq(1).append($('<option value="char">char</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(4).append($('<label> 정점 시작 번호 </label>'));
	               pr.children().eq(4).append($('<input type="text" placeholder="시작 번호 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(5).append($('<label> 방향 여부 </label>'));
	               pr.children().eq(5).append($('<select data-type="param" style="width: 75%" >'));
	               pr.children().eq(5).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(5).children().eq(1).append($('<option value="true">True</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(6).append($('<label> 가중치 여부  </label>'));
	               pr.children().eq(6).append($('<select data-type="param" style="width: 75%" class = "selectWeightBox">'));
	               pr.children().eq(6).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(6).children().eq(1).append($('<option value="true">True</option>'));
	               
	               break;
	         }
});

$(document).on("change",".selectDataBox", function(){
	            var selectValue = $("option:selected",this).val();
	            
	            $(this).parent().nextAll().remove(); // 이후 요소 일단 다 제거
	            
	            var pr = $(this).parent().parent();
	            switch(selectValue){
	               case "int" : case "double" : // Int / double
	                  pr.append($('<div class="lineLeft"></div>'));
	                  $(this).parent().next().append($('<label> 최소값 </label>'));
	                  $(this).parent().next().append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	                   
	                   pr.append($('<div class="lineRight"></div>'));
	                   $(this).parent().next().next().append($('<label> 최대값 </label>'));
	                   $(this).parent().next().next().append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	                  break;
	               
	               case "char" : // Char
	                  pr.append($('<div class="lineLeft"></div>'));
	                  $(this).parent().next().append($('<label> 출현 가능한 문자 </label>'));
	                  $(this).parent().next().append($('<input type="text" placeholder="문자" style="width: 75%">'));
	                  break;
	               case "string" : // String
	                  pr.append($('<div class="lineLeft"></div>'));
	                  $(this).parent().next().append($('<label> 출현 가능한 문자 </label>'));
	                  $(this).parent().next().append($('<input type="text" placeholder="문자" style="width: 75%">'));
	                  
	                  pr.append($('<div class="lineRight"></div>'));
	                  $(this).parent().next().next().append($('<label> 문자열 길이 </label>'));
	                  $(this).parent().next().next().append($('<input type="text" placeholder="문자열 길이" style="width: 75%">'));
	                  break;
	            }
});


$(document).on("change",".selectTypeBox", function(){
	            var selectValue = $("option:selected",this).val();

	            $(this).parent().next().children().remove(); // 이후 요소 일단 다 제거
	            
	            switch(selectValue){
	               case "int" : // Int / double
	                 $(this).parent().next().append($('<label> 정점 시작 번호 </label>'));
	                 $(this).parent().next().append($('<input type="text" placeholder="시작 번호" style="width: 75%">'));
	                  break;
	               
	               case "char" : // Char
	                  $(this).parent().next().append($('<label> 정점 시작 문자 </label>'));
	                  $(this).parent().next().append($('<input type="text" placeholder="시작 문자" style="width: 75%">'));
	                  break;
	            }
});

$(document).on("change",".selectWeightBox", function(){
	            var selectValue = $("option:selected",this).val();
	            var pr = $(this).parent().parent();
	            
	            if(selectValue == "true"){
	               pr.append($('<div class="lineLeft"></div>'));
	               $(this).parent().next().append($('<label> 최소값 </label>'));
	               $(this).parent().next().append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	                  
	                pr.append($('<div class="lineRight"></div>'));
	                $(this).parent().next().next().append($('<label> 최대값 </label>'));
	                $(this).parent().next().next().append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	            }else{ // false면 다없애버리기
	               $(this).parent().nextAll().remove();
	            }
});

$(".btn").click(function(){
	  var cr = $("#collapse-group").children().eq(1).children().eq(1).children().children().children();
	  var inputDataType = cr.children(0);
	  $('.selectInputBox').each(function(){
		  var len = $(this).parent().parent().children().length;
		  makeNumberString($(this).parent(), len);
	  });

});

function makeNumberString(thisObj, len){
	var element = thisObj.parent().children();
	var dataAttr = new Array(); // 데이터 속성을 배열에 저장
	console.log(element);
	element.each(function(){
		if($(this).find("select").length != 0){
			if($(this).find(".selectInputBox").length != 1){ // 입력데이터타입칸은
																// 제외하고
				dataAttr.push($(this).find("select option:selected").val());
			}
		}else if($(this).find("input").length != 0){
			dataAttr.push($(this).find("input").val());
		}
	});
	
	console.log(dataAttr);
	if(dataAttr[2] == 'int'){ // 숫자/문자타입이 int라면
		var OutputTag = $("textarea[name='member_name']");
		for (var i = 0; i < dataAttr[0]; i++) {
			var n = Math.floor(Math.random() * parseInt(dataAttr[4])) + parseInt(dataAttr[3]);
			OutputTag.val(OutputTag.val() + n + " ");
		}
		OutputTag.val(OutputTag.val() + "\n"); // 띄어쓰기
	}else if(dataAttr[2] == 'double'){
		var OutputTag = $("textarea[name='member_name']");
		for (var i = 0; i < dataAttr[0]; i++) {
			var n = Number(Math.random() * dataAttr[4] + dataAttr[3]);
			OutputTag.val(OutputTag.val() + n.toFixed(2) + " ");
		}
		OutputTag.val(OutputTag.val() + "\n"); // 띄어쓰기
	} else if(dataAttr[2] == 'char'){
		var OutputTag = $("textarea[name='member_name']");
		for (var i = 0; i < dataAttr[0]; i++) {
			var n = dataAttr[3].charAt(Number(Math.random()*dataAttr[3].length));
			OutputTag.val(OutputTag.val() + n + " ");
		}
		OutputTag.val(OutputTag.val() + "\n")
	} else if(dataAttr[2] == 'string'){
		var OutputTag = $("textarea[name='member_name']");
		for (var i = 0; i < dataAttr[0]; i++) {
			var n = "";
			for (var j = 0; j < dataAttr[4]; j++) {
				n += dataAttr[3].charAt(Number(Math.random()*dataAttr[3].length));
			}
			OutputTag.val(OutputTag.val() + n + " ");
		}
		OutputTag.val(OutputTag.val() + "\n")
	}
}

$(document).on('click', '.toggleBG', function () {
    var toggleBG = $(this);
    var toggleFG = $(this).find('.toggleFG');
    var left = toggleFG.css('left');
    if(left == '40px') {
        toggleBG.css('background', '#CCCCCC');
        toggleActionStart(toggleFG, 'TO_LEFT');
    }else if(left == '0px') {
        toggleBG.css('background', '#53FF4C');
        toggleActionStart(toggleFG, 'TO_RIGHT');
    }
});
 
// 토글 버튼 이동 모션 함수
function toggleActionStart(toggleBtn, LR) {
    // 0.01초 단위로 실행
    var intervalID = setInterval(
        function() {
            // 버튼 이동
            var left = parseInt(toggleBtn.css('left'));
            left += (LR == 'TO_RIGHT') ? 5 : -5;
            if(left >= 0 && left <= 40) {
                left += 'px';
                toggleBtn.css('left', left);
            }
        }, 10);
    setTimeout(function(){
        clearInterval(intervalID);
    }, 201);
}
