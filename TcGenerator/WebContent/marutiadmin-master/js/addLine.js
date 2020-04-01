$(function(){
   
   new Line().create();
   
   $("#addLineBtn").click(function(){
      new Line().create();
   });
   
});

function Line(){}

var cnt = 0;

// create()
Line.prototype.create = function(){
   
//   var str = $("#widget-box").clone().wrap("<div/>").parent().html() + "<br>";
   
   
   //////////////////// 아코디언 타입 //////////////////////   
   var $str = `<div class="accordion-group widget-box" id="widget-box">
                     <div class="accordion-heading">
                        <div class="widget-title">
                           <a href="#collapse`;
   cnt++;
   $str += cnt;
   $str += `"
   data-toggle="collapse"> <span class="icon"><i
   class="icon-magnet"></i></span>
      <h5>라인 `
   $str += cnt;
   $str +=   `</h5>
         </a> 
            <span class="icon2">
               <button class="removeLineBtn">라인삭제</button>
            </span>
            <script src="js/removeLine.js"> </script>

         </div>
      </div>
      <div class="collapse in accordion-body" id="collapse`
   $str += cnt;
   $str +=`">
         <div class="widget-content">
            <div class="row1">

               <div class="lineAll">
                  <label> 입력 데이터 타입 (Input Type)</label> 
                  <select data-type="param" data-param-name="inputType" class = "selectBox">
                     <option value="0">숫자(number)</option>
                     <option value="1">배열(array)</option>
                     <option value="2">문자열(String)</option>
                     <option value="3">트리(Tree)</option>
                     <option value="4">그래프(Graph)</option>
                  </select>
                  <script src="js/changeLine.js"> </script>
               </div>

            <div class="lineLeft">
               <label> 숫자 개수 (N)</label> 
               <input type="text" placeholder="숫자 개수(N)" style="width: 75%">
            </div>

            <div class="lineRight">
               <label> 최소 입력값 (Min Value)</label> <input type="text" placeholder="최소값" style="width: 75%">
            </div>

            <div class="lineLeft">
               <label> 최대 입력값 (Max Value)</label> <input type="text" placeholder="n_test_cases" style="width: 75%">
            </div>

            <div class="lineRight">
               <label> 전체 숫자 출력 여부 (print N) </label> 
               <select data-type="param" data-param-name="includeNTestCasesFlag" style="width: 75%">
                  <option value="0">False</option>
                  <option value="1">True</option>
               </select>
            </div>
         </div>
      </div>
      </div>
      </div>
      `

   
   $('.accordion').append($str);
   
}

