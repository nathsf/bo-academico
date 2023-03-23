


$(document).ready(function () {
	$("#img-docente").tooltip();

	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('.profile-pic').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}
	$(".file-upload").on('change', function () {
		readURL(this);
	});

	$(".upload-button").on('click', function () {
		$(".file-upload").click();
	});
	
	function modals() {
		$('#exampleModalAsignatura').modal('show');
		$('#exampleModalMatricula1').modal('show');

	};
	$("#modal-asignatura1").on('click', function () {
		modals();
	});

	function modalsNuevo() {
		$('#exampleModalMatricula').modal('show');
	};

	$("#nuevoBtn").on('click', function () {
		modalsNuevo();
	});
	function modalsAlerta() {
		$('#exampleModalAsignatura').modal('show');
		$('#alertaModal').modal('show');
	};
	function modalsExito() {
		$('#exampleModalAsignatura').modal('show');
		$('#successModal').modal('show');
		$('#alertaModal').modal('hide');

	};
	function modalsVer() {
		$('#verAutorizacion').modal('show');

	};
	function modalsEdit() {
		$('#editAutorizacion').modal('show');

	};
	function modalsEditG() {
		$('#asignahorarios').modal('show');
		$('#editarAsign').modal('show');

	};
	function modalsAprob() {
		$('#aprobAsignaturas').modal('show');
		$('#aprobModal').modal('show');
	};
	function modalsDesa() {
		$('#aprobAsignaturas').modal('show');
		$('#desaprobModal').modal('show');
	};
	function modalsNewDetail() {
		$('#detalle').modal('show');

		$('#nuevoDetalle').modal('show');

	};
	function modalsEditDetail() {
		$('#detalle').modal('show');

		$('#editarDetalle').modal('show');

	};
	$("#aprobBtn").on('click', function () {
		modalsAprob();
	});
	$("#desaBtn").on('click', function () {
		modalsDesa();
	});
	$("#verBtn").on('click', function () {
		modalsVer();
	});
	$("#editarBtn").on('click', function () {
		modalsEdit();
		modalsEditG();
	});
	$("#asignatPlan").on('click', function () {
		$('#asignahorarios').modal('show');
		$('#asigncurricula').modal('show');
	});
	$("#completagrupoBtn").on('click', function () {
		$('#asignahorarios').modal('show');
		$('#completagrupo').modal('show');
	});
	$("#incompletagrupoBtn").on('click', function () {
		$('#asignahorarios').modal('show');
		$('#incompletagrupo').modal('show');
	});
	$("#grupoParaleloBtn").on('click', function () {
		$('#asignahorarios').modal('show');
		$('#grupoParalelo').modal('show');
	});
	$("#carreraBtn").on('click', function () {
		$('#asignahorarios').modal('show');
		$('#carreraModal').modal('show');
	});
	$("#sesionesModalBtn").on('click', function () {
		$('#asignahorarios').modal('show');
		$('#sesionesModal').modal('show');
	});
	$("#eliminarBtn").on('click', function () {
		modalsAlerta();
		$('#asignahorarios').modal('show');
		$('#eliminarSesion').modal('show');
	});
	$("#guardarSuccess").on('click', function () {
		modalsExito();
	});
	$("#editarDetalleBtn").on('click', function () {
		modalsEditDetail();
	});
	$("#nuevoDetalleBtn").on('click', function () {
		modalsNewDetail();
	});

	$("#select-nuevoAutorizacion, #select-verAutorizacion").select2({
		placeholder: "Seleccione programa",
		allowClear: true
	});
	$('#select-nuevoAutorizacion').on('select2:select', function (e) {
		var data = e.params.data;
		console.log(data["title"]);

		if ((data["title"] === "Créditos máximos")) {
			$('.credmax-content').show();
			$('.ampliacionM-content').hide();
			$('.agregarA-content').hide();
			console.log(data["title"]);
		}
		if (data["title"] === "Agregar Asignatura") {
			$('.credmax-content').hide();
			$('.ampliacionM-content').hide();
			$('.agregarA-content').show();
			console.log(data["title"]);
		}
		if (data["title"] === "Ampliación de matrícula") {
			$('.credmax-content').hide();
			$('.ampliacionM-content').show();
			$('.agregarA-content').hide();
			console.log(data["title"]);
		}
		if (data["title"] === "Modificación de matrícula") {
			$('.credmax-content').hide();
			$('.ampliacionM-content').hide();
			$('.agregarA-content').hide();
			console.log(data["title"]);
		}
	});
	$('#asignahorarios, #asistenciaEstudiantesModal, #estudiantesModal, #asignahorario, #recuperacion').on('shown.bs.modal', function () {
		var tableModal = $('#tableModal, #sesionesTable , .tableModal').DataTable(
			{
				
				responsive: true,
				"language": {
					"lengthMenu": "#Filas _MENU_ ",
					"emptyTable": "Ningún dato disponible en esta tabla",
					"zeroRecords": "No se encontró resultados",
					"info": "#Registros: _TOTAL_ ",
					"infoEmpty": "No se encontró resultados",
					"infoFiltered": "(filtrados de _MAX_ registros)",
					"paginate": {
						"first": "Primero",
						"last": "Último",
						"next": "Siguiente",
						"previous": "Anterior"
					},
					"search": "Buscar:",
					"searchPlaceholder": "Buscar"
				},
	
			}
	
		);
		new $.fn.dataTable.FixedHeader(tableModal);

	});

	
	var table = $('#notas, #datos, #matricula, .tabledata-custom, #curso').DataTable(
		{
			
			responsive: true,
			"language": {
				"lengthMenu": "#Filas _MENU_ ",
				"emptyTable": "Ningún dato disponible en esta tabla",
				"zeroRecords": "No se encontró resultados",
				"info": "#Registros: _TOTAL_ ",
				"infoEmpty": "No se encontró resultados",
				"infoFiltered": "(filtrados de _MAX_ registros)",
				"paginate": {
					"first": "Primero",
					"last": "Último",
					"next": "Siguiente",
					"previous": "Anterior"
				},
				"search": "Buscar:",
				"searchPlaceholder": "Buscar"
			},

		}

	);

	new $.fn.dataTable.FixedHeader(table);

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	$("button").hover(function () {
		$(".tooltip").attr('data-color', $(this).data("color"));
	});

	$("span").hover(function () {
		$(".tooltip").attr('data-color', $(this).data("color"));
	});



	let classes = ['outline-primary', 'outline-primary', 'outline-primary', 'outline-primary', 'outline-primary'];
	let selects = $('select.select-bs');
	let selectsNivel = $('select.select-nivel');
	let selectsInstitucion = $('select.select-institucion');
	let selectsEstado = $('select.select-estado');
	let selectsCarrera = $('select.select-carrera');
	let selectsCondiciones = $('select.select-condiciones');
	let selectsPeriodo = $('select.select-periodo');
	let selectsAutorizaciones = $('select.select-autorizaciones');
	let selectsTipoAut = $('select.select-tipo');
	let selectsPrograma = $('select.select-programa');
	let selectsSede = $('select.select-sede');

	selects.each(function (i, e) {
		// let randomClass  = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-outline-primary',
			btnWidth: 'auto',
			btnEmptyText: 'Seleccione',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	})
	selectsNivel.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Nivel ',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	})
	selectsInstitucion.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Institución',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	selectsCondiciones.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Condiciones',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	})
	selectsCarrera.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Carrera',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	selectsPrograma.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Programa',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	selectsPeriodo.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Periodo',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	})
	selectsEstado.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Estado',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	selectsAutorizaciones.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Autorizado por',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: false,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	selectsTipoAut.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Tipo de autorización',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: false,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	selectsSede.each(function (i, e) {
		let randomClass = classes[Math.floor(Math.random() * classes.length)];
		$(this).bsSelectDrop({
			btnClass: 'btn btn-' + classes[i],
			btnWidth: 'auto',
			btnEmptyText: 'Sede',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	});
	$("#checked-asignatura").hide();
	$("#checked-docente").hide();
	$(".infoActa").hide();

	$("#asignaturaCheck").on('click', function () {
		$("#checked-asignatura").show();
		$("#checked-docente").hide();

	});
	$("#docenteCheck").on('click', function () {
		$("#checked-asignatura").hide();
		$("#checked-docente").show();

	});
	$(".btn-identificar").on('click', function(){
		$(".infoActa").show();
	})
	$(".btn-close").on('click', function(){
		$(".infoActa").hide();

	})

	$('#datepicker').datepicker(
		{
		  format: "dd/mm/yyyy",
		  language: "es",
		  autoclose: true,
		  todayHighlight: true,
		}
	  );
});