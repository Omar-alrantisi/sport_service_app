


let langs=document.getElementById("langs");
let enter_number=document.getElementById("enter_number");
let phone=document.getElementById('phone');
let btn=document.getElementById('btn');
let terms=document.getElementById('terms');
let desc=document.getElementById('desc');

let enter_number2=document.getElementById("enter_number2");
let phone2=document.getElementById('phone2');
let btn2=document.getElementById('btn2');
let terms2=document.getElementById('terms2');
let desc2=document.getElementById('desc2');


let terms_link=document.getElementById('terms_link')
let part_three=document.querySelector(".part_three");
let part_two=document.querySelector(".part_two");



    langs.addEventListener('change',(changeLang)=>{
        setLanguage(changeLang.target.value);

    
    })


    function setLanguage(getLanguage){


        if(getLanguage==='english'){
            
            enter_number.innerHTML="Enter Your number"
            phone.placeholder="phone number 962..."
            btn.value="Continue";
            terms.innerHTML=" Clicking the button means you are okay with"
            desc.innerHTML="Sports are defined as physical or mental exertion by individuals and are committed to maintaining physical or mental fitness. There are many types of exercise that can be practiced as a healthy habit, such as walking, riding, Swimming, or athletics, and these sports have many benefits on the human body and mind."
            terms_link.innerText="Terms & Conditions"


            enter_number2.innerHTML="Insert Code"
            phone2.placeholder="Code..."
            btn2.value="Subscribe";
            terms2.innerHTML=" Clicking the button means you are okay with"
            desc2.innerHTML="Sports are defined as physical or mental exertion by individuals and are committed to maintaining physical or mental fitness. There are many types of exercise that can be practiced as a healthy habit, such as walking, riding, Swimming, or athletics, and these sports have many benefits on the human body and mind."
            terms_link2.innerText="Terms & Conditions"
        }
        if(getLanguage==='arabic'){
           

               enter_number.innerHTML="ادخل رقم الهاتف"
               phone.placeholder="رقم الهاتف 962"
               btn.value="استمر";
               terms.innerHTML=" النقر على الزر يعني أنك موافق على "
               terms_link.innerHTML="الشروط و الأحكام"
               desc.innerText="يتم تعريف الرياضة على أنها مجهود جسدي أو عقلي من قبل الأفراد والملتزمين بالحفاظ على اللياقة البدنية أو العقلية. هناك العديد من أنواع التمارين التي يمكن ممارستها كعادة صحية، مثل المشي، ركوب الخيل، السباحة، أو ألعاب القوى، وهذه الرياضة لديها العديد من الفوائد على جسم الإنسان والعقل"


               enter_number2.innerHTML="ادخل الرمز"
               phone2.placeholder="الرمز"
               btn2.value="اشتراك";
               terms2.innerHTML=" النقر على الزر يعني أنك موافق على "
               terms_link2.innerHTML="الشروط و الأحكام"
               desc2.innerText="يتم تعريف الرياضة على أنها مجهود جسدي أو عقلي من قبل الأفراد والملتزمين بالحفاظ على اللياقة البدنية أو العقلية. هناك العديد من أنواع التمارين التي يمكن ممارستها كعادة صحية، مثل المشي، ركوب الخيل، السباحة، أو ألعاب القوى، وهذه الرياضة لديها العديد من الفوائد على جسم الإنسان والعقل"
        }

       

        

    }

    btn.addEventListener('click',(e)=>{
        
            e.preventDefault();
        
        console.log("hazem")
            // part_three.style.display="block";
            // part_two.style.display="none";
            part_three.style.setProperty('display','block', 'important');
            part_two.style.setProperty('display','none', 'important');



    })
    // function getData(e) {
    //     e.preventDefault();
    // }
    