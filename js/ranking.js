var rankingTable='';

function showRanking(){
    rankingTable='<div class="sidebar"><h2>User Scores</h2>';
    var scoreboard=document.getElementById('scoreboard')
    rankingSorted=ranking.sort(function(a, b) {
        if(typeof b!==Text){
            return -2;
        }
        return a.score - b.score;
      });
    rankingSorted.forEach(position => {
        rankingTable+='<div class="sidebar__user"><h4>'+position.name+'</h4><p>'+position.score+'</p></div>';
    });
    rankingTable+='</div>';
    scoreboard.innerHTML=rankingTable;
}



function setNewValueToRanking(n, value){
    ranking.push({name: n, score: value });
}

