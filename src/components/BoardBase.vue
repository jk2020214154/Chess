
<template>

<h1></h1>

<TheChessboard style="width: 400px" :board-config="boardConfig" />

<ContentBase>

<h4 id="changecnt">Change Counter:0</h4>
<h4 id="operator">Operator:White</h4>
<h4 id="fromto">Latest Move: { "from": null, "to": null }</h4>
<h4 id="isselect">No square has been selected yet</h4>
</ContentBase>
</template>


<script>

import ContentBase from '../components/ContentBase';
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';


export default{
    name:"BoardBase",
    components:{
        TheChessboard,
        ContentBase,
    },
    setup(){
        let changecnt=0;
        const boardConfig = {
            events: {
                change: () => {
                // called after the situation changes on the board
                    console.log('Something changed!');
                    changecnt++;
                    //dconsole.log(changecnt);
                    document.getElementById('changecnt').innerHTML="Change Counter:"+changecnt;
                    if(changecnt%2==1)
                    {
                        document.getElementById('operator').innerHTML="Operator:"+"Black";
                        document.getElementById("operator").style.color="Black";
                    }
                    else
                    {
                        document.getElementById('operator').innerHTML="Operator:"+"White";
                        document.getElementById("operator").style.color="White";
                    }
                },
                move: (from, to, capture) => {
                // the move function fires after each move on the board, you can access the values from, to, and capture
                    console.log(from, to, capture);
                    if(capture===undefined)
                        document.getElementById('fromto').innerHTML="Latest Move: { \"from\": \"" + from + "\", \"to\": \"" +to+"\" }";
                    else
                    {
                        //console.log(capture);
                        document.getElementById('fromto').innerHTML="Latest Move: { \"from\": \"" + from + "\", \"to\": \"" +to+"\", \"capture\": "+JSON.stringify(capture)+"}";
                    }

                },
                select(key) {
                // called when a square is selected
                // the param key is the square being selected: e.g. d2 or e2...
                    console.log(key);
                    document.getElementById('isselect').innerHTML="Square "+key+" has been selected";
                },
            },
        };

        return{
            changecnt,
            boardConfig,
        }
    }
}

</script>



<style scoped>


#changecnt{
    height: 50px;
    color:red;
    font-weight: 800;
    text-align: center;
    padding-top: 10px;
    margin:auto;
}

#operator{
    width: 200px;
    height: 50px;
    color: white;
    font-weight: 800;
    text-align: center;
    padding-top: 10px;
    background-color: lightskyblue;
    margin:auto;
}

#fromto{
    height: 50px;
    color: orange;
    font-weight: 800;
    text-align: center;
    padding-top: 10px;
    margin:auto;
}
#isselect{
    height: 50px;
    color:purple;
    font-weight: 800;
    text-align: center;
    padding-top: 10px;
    margin:auto;
}


</style>
