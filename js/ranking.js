var rankingTable='';
var initialScore = "currenty playing..."

showRanking();

function showRanking(){
    rankingTable='<div class="sidebar"><h2>User Scores</h2>';
    var scoreboard=document.getElementById('scoreboard')
    ranking.sort(function(a, b) {
        if(typeof b.score=='string'){
            return 1;
        }else if(typeof a.score=='string'){
            return -1;
        }
           return (a.score - b.score);
      });
    ranking.forEach(position => {
        rankingTable+='<div class="sidebar__user"><h4>'+position.name+'</h4><p>'+position.score;
        if(typeof position.score!='string') rankingTable+=' s.';
        rankingTable+='</p></div>';
    });
    rankingTable+='</div>';
    scoreboard.innerHTML=rankingTable;
}



function setNewValueToRanking(n, value){
    ranking.push({name: n, score: value });
}


