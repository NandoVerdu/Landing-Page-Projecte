google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    export function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    export function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
['1','Landing page', new Date(2022,9,6), new Date(2022,9,11), null, 40, null],
['2','Nom empresa', new Date(2022,9,10), new Date(2022,9,14), null, 100, null],
['3','Logo', new Date(2022,9,13), new Date(2022,9,15), null, 100,null],
['4','Nom producte', new Date(2022,9,15), new Date(2022,9,16), null, 100,null],
['5','Definició producte', new Date(2022,9,3), new Date(2022,9,18), null, 70,null],
['6','Packaging/Preu', new Date(2022,9,12), new Date(2022,9,18), null, 50,null],

['7','Distribució', new Date(2022,9,18), new Date(2022,9,26), null, 0,null],
['8','Reds socials', new Date(2022,9,16), new Date(2022,9,23), null, 10,null],
['9','Pla marketing', new Date(2022,9,25), new Date(2022,10,3), null, 0,'8,5,7,6'],
['10','Registre stock', new Date(2022,9,20), new Date(2022,10,8), null, 15, null],
['11','Documentació', new Date(2022,9,27), new Date(2022,10,10), null, 10, null]
    ]);

     var options = {
        height: 600,
        gantt:{
        innerGridTrack: {fill: '#fff3e0'},
          innerGridDarkTrack: {fill: '#ffcc80'}}
      };

       var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

       chart.draw(data, options);
    }