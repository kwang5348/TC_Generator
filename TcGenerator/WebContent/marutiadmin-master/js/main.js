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
               <button class="removeLineBtn">라인삭제</button>
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
