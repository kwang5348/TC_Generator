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
            <label> 반복 횟수 </label> 
            <input type="text" placeholder="반복 횟수" style="width: 75%">
         </div>
         <div class="lineRight">
	         <label> 반복 횟수 출력 여부  </label> 
	         <select data-type="param" data-param-name="includeNTestCasesFlag" style="width: 75%">
	         <option value="no">False</option>
	         <option value="yes">True</option>
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

$(document).on("click", ".refreshBtn", function() {
    
	var OutputTag = $("textarea[name='member_name']");
	OutputTag.val("");
	      
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
		           pr.children().eq(1).append($('<label> 반복 횟수 </label>'));
		           pr.children().eq(1).append($('<input type="text" placeholder="반복 횟수" style="width: 75%">'));
	                       
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 반복 횟수 출력 여부 </label>'));
	               pr.children().eq(2).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(2).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(2).children().eq(1).append($('<option value="yes">True</option>'));
	               
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
			       pr.children().eq(1).append($('<label> 반복 횟수 </label>'));
			       pr.children().eq(1).append($('<input type="text" placeholder="반복 횟수" style="width: 75%">'));
			       
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 중복 값 여부 </label>'));
	               pr.children().eq(2).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(2).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(2).children().eq(1).append($('<option value="yes">True</option>'));

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
	               pr.children().eq(6).append($('<label> 열 최대값 </label>'));
	               pr.children().eq(6).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(7).append($('<label> 반복 횟수 출력 여부 </label>'));
	               pr.children().eq(7).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(7).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(7).children().eq(1).append($('<option value="yes">True</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(8).append($('<label> 행/열 출력 여부 </label>'));
	               pr.children().eq(8).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(8).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(8).children().eq(1).append($('<option value="yes">True</option>'));
	               
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(9).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(9).append($('<select data-type="param" style="width: 75%" class = "selectDataBox">'));
	               pr.children().eq(9).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(9).children().eq(1).append($('<option value="double">Double</option>'));
	               pr.children().eq(9).children().eq(1).append($('<option value="string">String</option>'));
	               pr.children().eq(9).children().eq(1).append($('<option value="char">Char</option>'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(10).append($('<label> 최소값 </label>'));
	               pr.children().eq(10).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(11).append($('<label> 최대값 </label>'));
	               pr.children().eq(11).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
	               
	               break;
	            case "2" : // Tree
		           pr.append($('<div class="lineLeft"></div>'));
			       pr.children().eq(1).append($('<label> 반복 횟수 </label>'));
			       pr.children().eq(1).append($('<input type="text" placeholder="반복 횟수" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 노드 개수 </label>'));
	               pr.children().eq(2).append($('<input type="text" placeholder="노드 개수" style="width: 75%">'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(3).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(3).append($('<select data-type="param" style="width: 75%" class = "selectTypeBox">'));
	               pr.children().eq(3).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(3).children().eq(1).append($('<option value="char">char</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(4).append($('<label> 정점 시작 번호 </label>'));
	               pr.children().eq(4).append($('<input type="text" placeholder="시작 번호 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(5).append($('<label> 반복 횟수 출력 여부 </label>'));
	               pr.children().eq(5).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(5).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(5).children().eq(1).append($('<option value="yes">True</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(6).append($('<label> 노드 개수 출력 여부 </label>'));
	               pr.children().eq(6).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(6).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(6).children().eq(1).append($('<option value="yes">True</option>'));
	               
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(7).append($('<label> 가중치 여부  </label>'));
	               pr.children().eq(7).append($('<select data-type="param" style="width: 75%" class = "selectWeightBox">'));
	               pr.children().eq(7).children().eq(1).append($('<option value="no">False</option>'));
	               pr.children().eq(7).children().eq(1).append($('<option value="yes">True</option>'));
	               
	               break;
	            case "3" : // Graph
	               pr.append($('<div class="lineLeft"></div>'));
		           pr.children().eq(1).append($('<label> 반복 횟수 </label>'));
		           pr.children().eq(1).append($('<input type="text" placeholder="반복 횟수" style="width: 75%">'));
		               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(2).append($('<label> 정점 개수 </label>'));
	               pr.children().eq(2).append($('<input type="text" placeholder="정점 개수" style="width: 75%">'));
	                
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(3).append($('<label> 간선 개수 </label>'));
	               pr.children().eq(3).append($('<input type="text" placeholder="간선 개수" style="width: 75%">'));
	                     
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(4).append($('<label> 숫자/문자 타입  </label>'));
	               pr.children().eq(4).append($('<select data-type="param" style="width: 75%" class = "selectTypeBox">'));
	               pr.children().eq(4).children().eq(1).append($('<option value="int">Int</option>'));
	               pr.children().eq(4).children().eq(1).append($('<option value="char">char</option>'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(5).append($('<label> 정점 시작 번호 </label>'));
	               pr.children().eq(5).append($('<input type="text" placeholder="시작 번호 값" style="width: 75%">'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(6).append($('<label> 방향 여부 </label>'));
	               pr.children().eq(6).append($('<select data-type="param" style="width: 75%" >'));
	               pr.children().eq(6).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(6).children().eq(1).append($('<option value="true">True</option>'));
	               
	               pr.append($('<div class="lineLeft"></div>'));
	               pr.children().eq(7).append($('<label> 반복 횟수 출력 여부 </label>'));
	               pr.children().eq(7).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(7).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(7).children().eq(1).append($('<option value="true">True</option>'));
	               
	               pr.append($('<div class="lineRight"></div>'));
	               pr.children().eq(8).append($('<label> 노드/정점 개수 출력 여부 </label>'));
	               pr.children().eq(8).append($('<select data-type="param" style="width: 75%">'));
	               pr.children().eq(8).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(8).children().eq(1).append($('<option value="true">True</option>'));
	               
	               pr.append($('<div class="lineAll"></div>'));
	               pr.children().eq(9).append($('<label> 가중치 여부  </label>'));
	               pr.children().eq(9).append($('<select data-type="param" style="width: 75%" class = "selectWeightBox">'));
	               pr.children().eq(9).children().eq(1).append($('<option value="false">False</option>'));
	               pr.children().eq(9).children().eq(1).append($('<option value="true">True</option>'));
	               
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
	                  
	                  pr.append($('<div class="lineRight"></div>'));
	                  $(this).parent().next().next().append($('<label> 동일 문자 출현 허용 </label>'));
	                  $(this).parent().next().next().append($('<select data-type="param" style="width: 75%">'));
	                  $(this).parent().next().next().children().eq(1).append($('<option value="true">True</option>'));
	                  $(this).parent().next().next().children().eq(1).append($('<option value="false">False</option>'));
	                  
	                  break;
	                  
	               case "string" : // String
	                  pr.append($('<div class="lineLeft"></div>'));
	                  $(this).parent().next().append($('<label> 출현 가능한 문자 </label>'));
	                  $(this).parent().next().append($('<input type="text" placeholder="문자" style="width: 75%">'));
	                  
	                  pr.append($('<div class="lineRight"></div>'));
	                  $(this).parent().next().next().append($('<label> 문자열 길이 </label>'));
	                  $(this).parent().next().next().append($('<input type="text" placeholder="문자열 길이" style="width: 75%">'));
	                  
	                  
	                  pr.append($('<div class="lineLeft"></div>'));
	                  $(this).parent().next().next().next().append($('<label> 동일 char 출현 허용 </label>'));
	                  $(this).parent().next().next().next().append($('<select data-type="param" style="width: 75%">'));
	                  $(this).parent().next().next().next().children().eq(1).append($('<option value="true">True</option>'));
	                  $(this).parent().next().next().next().children().eq(1).append($('<option value="false">False</option>'));
	                  
// pr.append($('<div class="lineRight"></div>'));
// $(this).parent().next().next().next().next().append($('<label> 동일 String 출현
// 허용 </label>'));
// $(this).parent().next().next().next().next().append($('<select
// data-type="param" style="width: 75%">'));
// $(this).parent().next().next().next().next().children().eq(1).append($('<option
// value="true">True</option>'));
// $(this).parent().next().next().next().next().children().eq(1).append($('<option
// value="false">False</option>'));
	                  
	                  
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
	$("textarea[name='member_name']").val("");	

	var tcNum = $("#tcNum").val();
	console.log(tcNum);
	for (var i = 0; i < tcNum; i++) { // 테스트 케이스 반복
		$('.selectInputBox').each(function(){
			var len = $(this).parent().parent().children().length;
			var dataType = $(this).parent().find("select option:selected").val();
			
			if(dataType == "0"){ // 숫자/문자
				makeNumberString($(this).parent(), len);			  
			}else if(dataType == "1"){ // 배열
				makeArray($(this).parent(), len);
			}else if(dataType == "2"){ // 트리
				makeTree($(this).parent(), len);
			}else if(dataType == "3"){ // 그래프
				makeGraph($(this).parent(), len);
			}
		});		
	}

});

function makeGraph(thisObj, len){
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
	
	for (var test_case = 0; test_case < parseInt(dataAttr[0]); test_case++){
		var repeat = parseInt(dataAttr[0]);
		var node = parseInt(dataAttr[1]);
		var vertex = parseInt(dataAttr[2]);
		var OutputTag = $("textarea[name='member_name']");
		
		if(dataAttr[6] == 'true'){ // 반복 횟수 출력 여부
			OutputTag.val(OutputTag.val() + (test_case+1) + "\n");
		}
		
		if(dataAttr[7] == 'true'){ // 노드/정점 개수 출력 여부
			OutputTag.val(OutputTag.val() + node + " " + vertex + "\n");
		}
		
		
		var map = new Map();

		for (var i = 0; i < vertex; i++) {
			var input = "";
			
			if(dataAttr[5] == 'true'){ // 유향 그래프
				if(vertex > node * (node-1)){
					OutputTag.val(OutputTag.val() + "간선 개수가 " + node*(node-1) + "개 이하여야 합니다.\n");
					return;
				}
				if(dataAttr[3] == 'int'){ // 유향 중 int형인 경우
					var startNode = parseInt(dataAttr[4]);
					var sn = Math.floor(Math.random() * node) + startNode; // 열
					var en = Math.floor(Math.random() * node) + startNode;
					
					var temp = "" + sn + " " + en + " ";
					var length = map.size();
					map.put(temp);
					if(length == map.size() || sn == en){
						i--;
						continue;
					} else { 
						input += temp;
					}
				} else {  // 유향 중 char형인 경우

				}
			} else { // 무향그래프
				if(dataAttr[3] == 'int'){ // 무향 중 int형인 경우
					if(vertex > node * (node-1)/2){
						OutputTag.val(OutputTag.val() + "간선 개수가 " + node*(node-1)/2 + "개 이하여야 합니다.\n");
						return;
					}

					var startNode = parseInt(dataAttr[4]);
					var sn = Math.floor(Math.random() * node) + startNode; // 열
					var en = Math.floor(Math.random() * node) + startNode;
					
					var temp = "" + sn + " " + en + " ";
					var temp2 = " " + en + " " + sn + " ";
					var length = map.size();
					map.put(temp);
					map.put(temp2);
					if(length == map.size() || length == map.size() + 1 || sn == en){
						i--;
						continue;
					} else { 
						input += temp;
					}
				}
			}
			
			if(dataAttr[8] == 'true'){ // 가중치 설정
				var min = parseInt(dataAttr[9]);
				var max = parseInt(dataAttr[10]);
				var n = Math.floor(Math.random() * (max - min)) + min;
				input += n;
			}
			OutputTag.val(OutputTag.val() + input + "\n");
			
		}
		

	
	}

}

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
	if(dataAttr[1] == 'yes'){ // 반복 횟수 출력해야 한다면
		var OutputTag = $("textarea[name='member_name']");
		OutputTag.val(OutputTag.val() + dataAttr[0] + "\n");
	}
	
	if(dataAttr[2] == 'int'){ // 숫자/문자타입이 int라면
		var OutputTag = $("textarea[name='member_name']");
		for (var i = 0; i < dataAttr[0]; i++) {
			var n = Math.floor(Math.random() * parseInt(dataAttr[4])) + parseInt(dataAttr[3]);
			OutputTag.val(OutputTag.val() + n + "\n");
		}
	}else if(dataAttr[2] == 'double'){
		var OutputTag = $("textarea[name='member_name']");
		for (var i = 0; i < dataAttr[0]; i++) {
			var n = Number(Math.random() * dataAttr[4] + dataAttr[3]);
			OutputTag.val(OutputTag.val() + n.toFixed(2) + "\n");
		}
	} else if(dataAttr[2] == 'char'){
		var OutputTag = $("textarea[name='member_name']");
		if(dataAttr[4] == 'true'){ 
			for (var i = 0; i < dataAttr[0]; i++) {
				var n = dataAttr[3].charAt(Number(Math.random()*dataAttr[3].length));
				OutputTag.val(OutputTag.val() + n + "\n");
			}
		}
		else{
			if(dataAttr[3].length < dataAttr[0]){
				OutputTag.val("출력이 불가능한 경우입니다.")
			}
			else{
				var temp = new Array();
				for (var i = 0; i < dataAttr[3].length; i++) {
					temp[i] = i;
				}
				
				
				for (var i = 0; i < 10; i++) {
					var ran = Math.floor(Math.random()*dataAttr[3].length);
					var ran2 = Math.floor(Math.random()*dataAttr[3].length);
					
					console.log(ran + " " + ran2);
					var n = temp[ran];
					temp[ran] = temp[ran2];
					temp[ran2] = n;
					
				}
				for (var i = 0; i < dataAttr[0]; i++) {
					
					var n = dataAttr[3].charAt(temp[i]);
					OutputTag.val(OutputTag.val() + n + "\n");
				}
						
			}
		}
	} else if(dataAttr[2] == 'string'){
		var OutputTag = $("textarea[name='member_name']");
		var strSet = new Set();
		
		var strNum = dataAttr[3].length; // 출현 가능 문자 개수
		var strLen = dataAttr[4]; // 문자열 길이
		if(dataAttr[5] == 'true'){ // 동일 char 출현 허용
			if(Math.pow(strNum,strLen) < dataAttr[0]){ // 문자열 경우의 수가 반복횟수보다 적으면
														// 출력불가 조건 추가
				OutputTag.val("출력이 불가능한 경우입니다.")
			}
			
			var cnt = 0;
			while(cnt < dataAttr[0]){
				var n = "";
				for (var j = 0; j < dataAttr[4]; j++) {
					n += dataAttr[3].charAt(Number(Math.random()*dataAttr[3].length));
				}
				console.log(n);
				if(!strSet.has(n)){
					cnt++;
					strSet.add(n);
					OutputTag.val(OutputTag.val() + n + "\n");
				}
			}
		}
		else{ // 동일 char 출현 허용 x
			if(strLen > strNum){ // 만약 abc, 2개면 경우의 수 6개인데 반복횟수가 6보다 크면 출력 불가
									// 이 경우 조건 추가 요망.
				OutputTag.val("출력이 불가능한 경우입니다.")
			}
			else{
				var temp = new Array();
				for (var i = 0; i < dataAttr[3].length; i++) {
					temp[i] = i;
				}
				
				var cnt = 0;
				while(cnt < dataAttr[0]){
					for (var j = 0; j < 20; j++) {
						var ran = Math.floor(Math.random()*dataAttr[3].length);
						var ran2 = Math.floor(Math.random()*dataAttr[3].length);
						
						console.log(ran + " " + ran2);
						var n = temp[ran];
						temp[ran] = temp[ran2];
						temp[ran2] = n;
						
					}
					
					var str = "";
					
					for (var j = 0; j < dataAttr[4]; j++) {
						str += dataAttr[3].charAt(temp[j]);
					}
					console.log(str);
					if(!strSet.has(str)){
						cnt++;
						strSet.add(str);
						OutputTag.val(OutputTag.val() + str + "\n");
					}
				}		
			}
		}
	}
}

function makeArray(thisObj, len){
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
	
	console.log(dataAttr); // 0~8
	
	if(dataAttr[6] == 'yes'){ // 반복 횟수 출력해야한다면
		var OutputTag = $("textarea[name='member_name']");
		OutputTag.val(OutputTag.val() + dataAttr[0] + "\n");
	}
	
	for (var test_case = 0; test_case < parseInt(dataAttr[0]); test_case++) { // 반복
																				// 횟수
																				// 만큼
																				// 반복
		var rowLen = Math.floor(Math.random() * parseInt(dataAttr[3])) + parseInt(dataAttr[2]); // 행
																								// 최소값,
																								// 최대값
																								// 이용해서
																								// 랜덤 행
																								// 길이
																								// 뽑기
		var colLen = Math.floor(Math.random() * parseInt(dataAttr[5])) + parseInt(dataAttr[4]); // 열
																								// 최소값,
																								// 최대값
																								// 이용해서
																								// 랜덤 열
																								// 길이
																								// 뽑기
		
		console.log("행 값 : " + rowLen);
		console.log("열 값 : " + colLen);
		
		var resultArray = new Array(rowLen); // 이차원 배열 생성
		for (var i = 0; i < rowLen; i++) {
			resultArray[i] = new Array(colLen);
		}
		
		if(dataAttr[7] == 'yes'){ // 행/열 출력해야한다면
			var OutputTag = $("textarea[name='member_name']");
			OutputTag.val(OutputTag.val() + rowLen + " " + colLen + "\n");
		}
		
		if(dataAttr[8] == 'int'){ // 숫자/문자타입이 int라면
			var OutputTag = $("textarea[name='member_name']");
			for (var i = 0; i < rowLen; i++) {
				var tmpStr = "";
				for (var j = 0; j < colLen; j++) {
					var n = Math.floor(Math.random() * parseInt(dataAttr[10])) + parseInt(dataAttr[9]);
					tmpStr = tmpStr + n + " ";
				}
				OutputTag.val(OutputTag.val() + tmpStr + "\n");	 // 띄어쓰기
			}
		}else if(dataAttr[8] == 'double'){
			var OutputTag = $("textarea[name='member_name']");
			for (var i = 0; i < rowLen; i++) {
				var tmpStr = "";
				for (var j = 0; j < colLen; j++) {
					var n = Number(Math.random() * dataAttr[10] + dataAttr[9]);
					tmpStr = tmpStr + n.toFixed(2) + " ";
				}
				OutputTag.val(OutputTag.val() + tmpStr + "\n");	 // 띄어쓰기
			}
		} else if(dataAttr[8] == 'char'){
			var OutputTag = $("textarea[name='member_name']");
			for (var i = 0; i < rowLen; i++) {
				var tmpStr = "";
				for (var j = 0; j < colLen; j++) {
					var n = dataAttr[9].charAt(Number(Math.random()*dataAttr[9].length));
					tmpStr = tmpStr + n + " ";
				}
				OutputTag.val(OutputTag.val() + tmpStr + "\n");	 // 띄어쓰기
			}
		} else if(dataAttr[8] == 'string'){
			if(dataAttr[11] == 'true'){ // 동일 char true경우 추가
				var strNum = dataAttr[9].length; // 출현 가능 문자 개수
				var strLen = dataAttr[10]; // 문자열 길이
				var OutputTag = $("textarea[name='member_name']");
				if(Math.pow(strNum,strLen) < rowLen*colLen){ // 문자열 경우의 수가
																// 행*열 개수보다 적으면
																// 출력불가 조건 추가
					OutputTag.val("출력이 불가능한 경우입니다.")
				}else{
					var strSet = new Set();
					
					for (var i = 0; i < rowLen; i++) {
						var tmpStr = "";
						var cnt = 0;
						while(cnt < colLen){
							var n = "";
							for (var j = 0; j < dataAttr[10]; j++) {
								n += dataAttr[9].charAt(Number(Math.random()*dataAttr[9].length));
							}
							console.log(n);
							if(!strSet.has(n)){
								cnt++;
								strSet.add(n);
								tmpStr = tmpStr + n + " ";
							}
						}
						OutputTag.val(OutputTag.val() + tmpStr + "\n");	 // 띄어쓰기
					}
				}		
			}else{ // 동일 char false인 경우를 추가하라 팥 ㅡㅡ! (감시망)
				
			}
		}
	}
}


Map = function(){
	this.map = new Object();
};   
Map.prototype = {   
		put : function(key, value){   
			this.map[key] = value;
	    },   
	    get : function(key){   
	        return this.map[key];
	    },
	    containsKey : function(key){    
	     return key in this.map;
	    },
	    containsValue : function(value){    
	     for(var prop in this.map){
	      if(this.map[prop] == value) return true;
	     }
	     return false;
	    },
	    isEmpty : function(key){    
	     return (this.size() == 0);
	    },
	    clear : function(){   
	     for(var prop in this.map){
	      delete this.map[prop];
	     }
	    },
	    remove : function(key){    
	     delete this.map[key];
	    },
	    keys : function(){   
	        var keys = new Array();   
	        for(var prop in this.map){   
	            keys.push(prop);
	        }   
	        return keys;
	    },
	    values : function(){   
	     var values = new Array();   
	        for(var prop in this.map){   
	         values.push(this.map[prop]);
	        }   
	        return values;
	    },
	    size : function(){
	      var count = 0;
	      for (var prop in this.map) {
	        count++;
	      }
	      return count;
	    }
	};

