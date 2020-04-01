$(function(){
   $(".selectBox").change(function(){

         var selectValue = $("option:selected",this).val();
         
         console.log($(this));
         console.log($(this).parent());
         console.log($(this).parent().parent());
         
         $(this).parent().nextAll().remove(); // 이후 요소 일단 다 제거
         
         var pr = $(this).parent().parent();
         switch(selectValue){
            case "0" : // Number
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(1).append($('<label> 반복 횟수 </label>'));
               pr.children().eq(1).append($('<input type="text" placeholder="숫자 개수(N)" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(2).append($('<label> 타입  </label>'));
               pr.children().eq(2).append($('<input type="text" placeholder="타입 (Type)" style="width: 75%">'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(3).append($('<label> value 최소 입력값 (Min Value)</label>'));
               pr.children().eq(3).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(4).append($('<label> value 최대 입력값 (Max Value)</label>'));
               pr.children().eq(4).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
               
               break;
            case "1" : // Array
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(1).append($('<label> index 최소 입력값 (Min Index)</label>'));
               pr.children().eq(1).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(2).append($('<label> index 최대 입력값 (Max Index)</label>'));
               pr.children().eq(2).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(3).append($('<label> value 최소 입력값 (Min Value)</label>'));
               pr.children().eq(3).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(4).append($('<label> value 최대 입력값 (Max Value)</label>'));
               pr.children().eq(4).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
               
               break;
            case "2" : // String
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(1).append($('<label> 반복 횟수 </label>'));
               pr.children().eq(1).append($('<input type="text" placeholder="숫자 개수(N)" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(2).append($('<label> 문자열 길이 </label>'));
               pr.children().eq(2).append($('<input type="text" placeholder="문자열 길이(N)" style="width: 75%">'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(3).append($('<label> Distinct Chars Flag </label>'));
               pr.children().eq(3).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(3).children().eq(1).append($('<option value="false">False</option>'));
               pr.children().eq(3).children().eq(1).append($('<option value="true">True</option>'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(4).append($('<label> Chars </label>'));
               pr.children().eq(4).append($('<input type="text" placeholder="Chars" style="width: 75%">'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(5).append($('<label> Include N Flag </label>'));
               pr.children().eq(5).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(5).children().eq(1).append($('<option value="false">False</option>'));
               pr.children().eq(5).children().eq(1).append($('<option value="true">True</option>'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(6).append($('<label> Include N Test Cases Flag </label>'));
               pr.children().eq(6).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(6).children().eq(1).append($('<option value="false">False</option>'));
               pr.children().eq(6).children().eq(1).append($('<option value="true">True</option>'));
               break;
            case "3" : // Tree
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(1).append($('<label> 노드 개수 </label>'));
               pr.children().eq(1).append($('<input type="text" placeholder="노드 개수" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(2).append($('<label> Indexed From </label>'));
               pr.children().eq(2).append($('<input type="text" placeholder="Indexed From" style="width: 75%">'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(3).append($('<label> Include N Nodes Flag </label>'));
               pr.children().eq(3).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(3).children().eq(1).append($('<option value="false">False</option>'));
               pr.children().eq(3).children().eq(1).append($('<option value="true">True</option>'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(4).append($('<label> Include N Test Cases Flag </label>'));
               pr.children().eq(4).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(4).children().eq(1).append($('<option value="false">False</option>'));
               pr.children().eq(4).children().eq(1).append($('<option value="true">True</option>'));
               
               break;
            case "4" : // graph
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(1).append($('<label> 정점 개수 </label>'));
               pr.children().eq(1).append($('<input type="text" placeholder="정점 개수" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(2).append($('<label> 간선 개수 </label>'));
               pr.children().eq(2).append($('<input type="text" placeholder="간선 개수" style="width: 75%">'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(3).append($('<label> 가중치 여부 </label>'));
               pr.children().eq(3).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(3).children().eq(1).append($('<option value="false">False</option>'));
               pr.children().eq(3).children().eq(1).append($('<option value="true">True</option>'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(4).append($('<label> 가중치 타입 </label>'));
               pr.children().eq(4).append($('<select data-type="param" style="width: 75%">'));
               pr.children().eq(4).children().eq(1).append($('<option value="int">Int</option>'));
               pr.children().eq(4).children().eq(1).append($('<option value="long">Long</option>'));
               pr.children().eq(4).children().eq(1).append($('<option value="double">Double</option>'));
               pr.children().eq(4).children().eq(1).append($('<option value="string">String</option>'));
               pr.children().eq(4).children().eq(1).append($('<option value="char">Char</option>'));
               
               pr.append($('<div class="lineLeft"></div>'));
               pr.children().eq(5).append($('<label> value 최소 입력값 (Min Value)</label>'));
               pr.children().eq(5).append($('<input type="text" placeholder="최소 값" style="width: 75%">'));
               
               pr.append($('<div class="lineRight"></div>'));
               pr.children().eq(6).append($('<label> value 최대 입력값 (Max Value)</label>'));
               pr.children().eq(6).append($('<input type="text" placeholder="최대 값" style="width: 75%">'));
               
               break;
         }
      });
});