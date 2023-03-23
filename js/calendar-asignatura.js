document.addEventListener('DOMContentLoaded', function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           initialViews = 'listWeek';
       }else{
           initialViews = 'timeGridWeek';
       }   
     
     var calendarEl = document.getElementById('calendar');
     var today = moment().day();
     
     var calendar = new FullCalendar.Calendar(calendarEl, {
       
   
       locale: 'es',
       
         headerToolbar: {
               left: 'cmonth',
               center: 'title',
               right: 'prev,next'
         },
         
         buttonText:    {
         today:    'Today',
         // month:    'Mes',
         week:     'Semana',
         day:      'Día',
         list:     'Lista'
       },
       
       
             navLinks: true,
             firstDay: 1,
             hiddenDays: [ 0 ],
             initialView: initialViews,
   
             visibleRange: {
               start: '2023-02-13',
               end: '2023-04-31'
             },
             validRange: {
               start: '2023-02-13',
               end: '2023-04-31'
             },
             
               editable: true,
               selectable: false, 
               unselectAuto:true,
               eventOverlap: false,
               eventColor: '#f16621', 
               slotDuration: '00:30',
               allDaySlot : false,
               eventStartEditable: false,
               eventDurationEditable:false,
               slotLabelInterval: "00:30",
               longPressDelay: 0,
               nowIndicator: "true", //indicator of current time
               slotMinTime: '07:00',
               slotMaxTime: '21:00',
               eventContent: function( arg ) {
             return { html: arg.event.title };
         },
         eventDidMount: function(info) {
           $(info.el).tooltip({ 
             title: info.event.extendedProps.description,
             placement: "top",
             trigger: "hover",
             container: "body",
             html: true,
           });
         },
         events: [
           {
             id: '1',
             title: '<span><strong>PS1</strong><BR> PSICOLOGIA SOCIAL</span>',
             start: '2023-02-13 09:00:00',
             end: '2023-02-13 10:40:00',
             description: ' <ul><li class="border-bottom pt-1 pb-2 mb-1 fw-medium">PSICOPATOLOGIA</li><li >Hora inicio: <strong> -</strong></li><li >Hora Fin:<strong> -</strong></li><li >Horario:<strong> Lun 9:00 - 10:40, Vie 10:50 - 12:30</strong></li><li >Inicio: <strong>02/01/2023</strong> </li><li >Fin: <strong>28/02/2023</strong> </li> <li >Docente: <strong>AGUINAGA ALVAREZ, ADOLFO.</strong> </li><li >Aula: <strong>C13</strong> </li></ul>',
   
           },
           {
             id: '2',
             title: '<span><strong>EAP2</strong></span>',
             start: '2023-02-15 10:50:00',
             end: '2023-02-15 12:30:00',
             description: '<ul><li class="border-bottom pt-1 pb-2 mb-1 fw-medium">ESTADISTICA APLICADA A LA PSICOLOGIA II</li><li >Hora inicio: <strong> -</strong></li><li >Hora Fin:<strong> -</strong></li><li >Horario:<strong> Mier 10:50 - 12:30, Vie 09:00 - 10:30</strong></li><li >Inicio: <strong>04/01/2023</strong> </li><li >Fin: <strong>11/02/2023</strong> </li> <li >Docente: <strong>UCEDO SELVA, VICTOR HUGO</strong> </li><li >Aula: <strong>C13</strong> </li></ul>',
   
    
           },
   
           {
             id: '3',
             title: '<span><strong>P</strong></span>',
             start: '2023-02-17 10:50:00',
             end: '2023-02-17 12:30:00',
             description: ' <ul><li class="border-bottom pt-1 pb-2 mb-1 fw-medium">PSICOPATOLOGIA</li><li >Hora inicio: <strong> -</strong></li><li >Hora Fin:<strong> -</strong></li><li >Horario:<strong> Lun 9:00 - 10:40, Vie 10:50 - 12:30</strong></li><li >Inicio: <strong>02/01/2023</strong> </li><li >Fin: <strong>28/02/2023</strong> </li> <li >Docente: <strong>AGUINAGA ALVAREZ, ADOLFO.</strong> </li><li >Aula: <strong>C13</strong> </li></ul>',
   
           },
           {
             id: '4',
             title: '<span><strong>EAP2</strong></span>',
             start: '2023-02-17 09:00:00',
             end: '2023-02-17 10:30:00',
             description: '<ul><li class="border-bottom pt-1 pb-2 mb-1 fw-medium">ESTADISTICA APLICADA A LA PSICOLOGIA II</li><li >Hora inicio: <strong> -</strong></li><li >Hora Fin:<strong> -</strong></li><li >Horario:<strong> Mier 10:50 - 12:30, Vie 09:00 - 10:30</strong></li><li >Inicio: <strong>04/01/2023</strong> </li><li >Fin: <strong>11/02/2023</strong> </li> <li >Docente: <strong>UCEDO SELVA, VICTOR HUGO</strong> </li><li >Aula: <strong>C13</strong> </li></ul>',
   
    
           },
           
         ],
   
         dateClick: function(info) {
          // alert('Clicked on: ' + info.dateStr);
          // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
          // alert('Current view: ' + info.view.type);
          info.dayEl.style.backgroundColor = '#eb070726';
          $("#registrarSesion").modal('show');
          }
         
       });
   
      
       $('#asignahorarios').on('shown.bs.modal', function () {
          calendar.render();
          var cdate = calendar.getDate();
          var cmonth = cdate.toLocaleString('default', { month: 'long' });
          var cyear = + cdate.getFullYear();
      
          $( ".fc-cmonth-button " ).html( `<p class="mb-0 text-uppercase pt-1">${cmonth} ${cyear} </p>` );
      
          $(".fc-next-button , .fc-prev-button").on('click', function() {
            var cdate = calendar.getDate();
            var cmonth = cdate.toLocaleString('default', { month: 'long' });
            var cyear = + cdate.getFullYear();
            console.log(cmonth + cyear);
      
            $( ".fc-cmonth-button" ).html( `<p class="mb-0 text-uppercase pt-1">${cmonth} ${cyear}</p>` );
          });
         
          
      
          if ($(window).width() < 800) {
            calendar.changeView('listWeek');
          }
      
         
         
        });   

      
         
     
   });

   