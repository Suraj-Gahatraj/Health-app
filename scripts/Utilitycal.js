
var date_collect="";
var month_year_collect="";
var date_range=[];

var testing_array=[20,21,22,23,24];

var Calendar = function(calendarmonthyear,calendardates,calendar_container,month_offset=0){
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth()+month_offset;  
    var year = d.getFullYear();
    var first_date = month_name[month] + " " + 1 + " " + year;
   
    var tmp = new Date(first_date).toDateString();
   
    var first_day = tmp.substring(0, 3);   
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   
    var days = new Date(year, month+1, 0).getDate();    
  
    var calendar = get_calendar(day_no, days);
 
    document.getElementById(calendarmonthyear).innerHTML = month_name[month]+" "+year;
   
    document.getElementById(calendardates).appendChild(calendar);

    clickEventCalendar(calendar_container,calendarmonthyear);

}

function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    //row for the day letters
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            if(testing_array.includes(count))
                {td.style.background="blue";}
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}


function clickEventCalendar(calendar_container,monthId)
{
        document.getElementById(calendar_container).addEventListener("click", function(event) {
        var td = event.target;
         while (td !== this && !td.matches("td")) {
          td = td.parentNode;
          console.log("hell parent.node "+td.parentNode);
      }
      if (td === this) {
          console.log("No table cell found");
      } else {
          console.log(td.innerHTML);
          date_collect=date_collect+td.innerHTML;
          console.log("value of date_colect is :" +date_collect);
          console.log(document.getElementById(monthId).innerHTML);
          month_year_collect=document.getElementById(monthId).innerHTML;
          console.log("month_year_collect : ",month_year_collect);
      }
    });
}

function getPeriodDays(date,cycles)
{
    
    var d=new Date(date);
    date_range.push(d.getDate());
    for(let i=1;i<cycles;i++)
    {
        var x= new Date(d.setDate(d.getDate()+1));
        console.log(x.getDate());
        date_range.push(x.getDate());
    }

    console.log(date_range);
}

getPeriodDays("27 august 2019",5);
 
Calendar("calendar-month-year","calendar-dates","calendar-container",-1);
Calendar("calendar-month-year1","calendar-dates1","calendar-container2",0);