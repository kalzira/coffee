function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var questionsList = [question1, question2, question3].toString();
    var correct = '';
    var message = document.getElementById("message");

    //ITALIAN

    var Italian1 =["Bellagio Coffee",
        "La Vita",
    "Limoncello",
    "Adriano Coffee",
        "LENNY KENNY",
    "UNO"];
    var Italian2 =[
        "Bellagio Coffee",
        "La Vita",
    "Panda Coffee",
        "ЧуйКоff",
        "UNO",
    "Friends Coffee",
    ];
    var Italian3 =["Friends Coffee"];


    var Italian4 =["Adriano Coffee","UNO"];
    var Italian5 =["UNO"];
    var Italian6 =["UNO"];


    var Italian7 =["La Vita",
        "Limoncello",
        "Adriano Coffee",
    "UNO"];
    var Italian8 =["La Vita",
        "Panda Coffee",
        "ЧуйКоff",
        "UNO"];
    var Italian9 =["Panda Coffee","UNO"];


    var Italian10 =["LENNY KENNY",
        "UNO"];
    var Italian11 =["LENNY KENNY",
        "UNO"];
    var Italian12 =["UNO"];


    //JAPAN

    var Japan1 =["Cave coffee","UNO"];
    var Japan2 =["Cave coffee","UNO","Panda coffee","Nova"];
    var Japan3 =["Panda coffee","Nova"];

    var Japan4 =["Cave coffee","UNO"];
    var Japan5 =["Cave coffee","UNO"];
    var Japan6 =["Cave coffee","UNO"];

    var Japan7 =["UNO"];
    var Japan8 =["UNO"];
    var Japan9 =["UNO"];

    var Japan10 =["Cave coffee","UNO"];
    var Japan11 =["Cave coffee","UNO"];
    var Japan12 =["Cave coffee","UNO"];


    //AMERICAN

    var American1 =["SIERRA",
    "Adriano Coffee",
    "Tramontana",
        "Tucano",
        "UNO"];
    var American2 =[
    "C'est la vie","SIERRA","UNO","ЧуйКоff"
    ];
    var American3 =["C'est la vie","UNO"];


    var American4 =["SIERRA",
        "Adriano Coffee","UNO"];
    var American5 =["SIERRA",
        "UNO"];
    var American6 =["UNO"];


    var American7 =["Tramontana","UNO"];
    var American8 =["UNO"];
    var American9 =["UNO"];


    var American10 =["SIERRA",
        "Adriano Coffee",
        "Tramontana",
        "Tucano","UNO"];
    var American11 =["SIERRA",
        "Adriano Coffee","UNO","C'est la vie","ЧуйКоff"];
    var American12 =["UNO","C'est la vie"];




    // var questionsList = [question1, question2, question3].toString();

    // console.log(questionsList.toString());

    //ITALIAN

    // WIFI

    if (questionsList== "Italian,300-500,Wi-Fi"){
        correct='option1_i';
    }
    else if (questionsList== "Italian,500-800,Wi-Fi"){
        correct='option2_i';
    }else if (questionsList== "Italian,800-1200,Wi-Fi"){
        correct='option3_i';
    }

    //BOOKS

    else if (questionsList== "Italian,300-500,Books"){
        correct='option4_i';
    }
    else if (questionsList== "Italian,500-800,Books"){
        correct='option5_i';
    } else if (questionsList== "Italian,800-1200,Books"){
        correct='option6_i';
    }
    //italianToGo
    else if (questionsList== "Italian,300-500,Coffee to go"){
        correct='option7_i';
    }
    else if (questionsList== "Italian,500-800,Coffee to go"){
        correct='option8_i';
    } else if (questionsList== "Italian,800-1200,Coffee to go"){
        correct='option9_i';
    }
    //GAMES

    else if (questionsList== "Italian,300-500,Board games"){
        correct='option10_i';
    }
    else if (questionsList== "Italian,500-800,Board games"){
        correct='option11_i';
    } else if (questionsList== "Italian,800-1200,Board games"){
        correct='option12_i';
    }

    //JAPAN

    // WIFI

    if (questionsList== "Japan,300-500,Wi-Fi"){
        correct='option1_j';
    }
    else if (questionsList== "Japan,500-800,Wi-Fi"){
        correct='option2_j';
    }else if (questionsList== "Japan,800-1200,Wi-Fi"){
        correct='option3_j';
    }

    //BOOKS

    else if (questionsList== "Japan,300-500,Books"){
        correct='option4_j';
    }
    else if (questionsList== "Japan,500-800,Books"){
        correct='option5_j';
    } else if (questionsList== "Japan,800-1200,Books"){
        correct='option6_j';
    }
    //italianToGo
    else if (questionsList== "Japan,300-500,Board games"){
        correct='option10_j';
    }
    else if (questionsList== "Japan,500-800,Board games"){
        correct='option11_j';
    } else if (questionsList== "Japan,800-1200,Board games"){
        correct='option12_j';
    }

    //GAMES

    else if (questionsList== "Japan,300-500,Coffee to go"){
        correct='option7_j';
    }
    else if (questionsList== "Japan,500-800,Coffee to go"){
        correct='option8_j';
    } else if (questionsList== "Japan,800-1200,Coffee to go"){
        correct='option9_j';
    }


    //American


    // WIFI

    if (questionsList== "American,300-500,Wi-Fi"){
        correct='option1_a';
    }
    else if (questionsList== "American,500-800,Wi-Fi"){
        correct='option2_a';
    }else if (questionsList== "American,800-1200,Wi-Fi"){
        correct='option3_a';
    }

    //BOOKS



    //GAMES

    else if (questionsList== "American,300-500,Books"){
        correct='option7_a';
    }
    else if (questionsList== "American,500-800,Books"){
        correct='option8_a';
    } else if (questionsList== "American,800-1200,Books"){
        correct='option9_a';
    }
    //italianToGo
    else if (questionsList== "American,300-500,Board games"){
        correct='option10_a';
    }
    else if (questionsList== "American,500-800,Board games"){
        correct='option11_a';
    } else if (questionsList== "American,800-1200,Board games"){
        correct='option12_a';
    }


    else if (questionsList== "American,300-500,Coffee to go"){
        correct='option4_a';
    }
    else if (questionsList== "American,500-800,Coffee to go"){
        correct='option5_a';
    } else if (questionsList== "American,800-1200,Coffee to go"){
        correct='option6_a';
    }


    //correct

    // var pictures=[]


    //japan

    if (correct == 'option1_i') {
        message.innerHTML = Italian1;
        // document.getElementById("message").style.backgroundColor="";

    }
    else if(correct=='option2_i'){
        message.innerHTML = Italian2;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option3_i'){
        message.innerHTML = Italian3;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option4_i'){
        message.innerHTML = Italian4;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option5_i'){
        message.innerHTML = Italian5;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option6_i'){
        message.innerHTML = Italian6;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option7_i'){
        message.innerHTML = Italian7;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option8_i'){
        message.innerHTML = Italian8;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option9_i'){
        message.innerHTML = Italian9;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option10_i'){
        message.innerHTML = Italian10;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option11_i'){
        message.innerHTML = Italian11;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option12_i'){
        message.innerHTML = Italian12;
        // document.getElementById("message").style.backgroundColor="";
    }



    //JAPANCORRECT

    else if (correct == 'option1_j') {
        message.innerHTML = Japan1;
        // document.getElementById("message").style.backgroundColor="";

    }
    else if(correct=='option2_j'){
        message.innerHTML = Japan2;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option3_j'){
        message.innerHTML = Japan3;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option4_j'){
        message.innerHTML = Japan4;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option5_j'){
        message.innerHTML = Japan5;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option6_j'){
        message.innerHTML = Japan6;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option7_j'){
        message.innerHTML = Japan7;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option8_j'){
        message.innerHTML = Japan8;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option9_j'){
        message.innerHTML = Japan9;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option10_j'){
        message.innerHTML = Japan10;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option11_j'){
        message.innerHTML = Japan11;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option12_j'){
        message.innerHTML = Japan12;
        // document.getElementById("message").style.backgroundColor="";
    }
    
    //AMERICANCORRECT
        
    else if (correct == 'option1_a') {
        message.innerHTML = American1;
        // document.getElementById("message").style.backgroundColor="";

    }
    else if(correct=='option2_a'){
        message.innerHTML = American2;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option3_a'){
        message.innerHTML = American3;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option4_a'){
        message.innerHTML = American4;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option5_a'){
        message.innerHTML = American5;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option6_a'){
        message.innerHTML = American6;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option7_a'){
        message.innerHTML = American7;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option8_a'){
        message.innerHTML = American8;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option9_a'){
        message.innerHTML = American9;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option10_a'){
        message.innerHTML = American10;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option11_a'){
        message.innerHTML = American11;
        // document.getElementById("message").style.backgroundColor="";
    }
    else if(correct=='option12_a'){
        message.innerHTML = American12;
        // document.getElementById("message").style.backgroundColor="";
    }


     
     
     
     
     
     
     
    

    






    document.getElementById("after_submit").style.visibility = "visible";



}