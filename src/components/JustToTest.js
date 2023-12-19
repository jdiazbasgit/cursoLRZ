import React, { Component } from 'react';
import axios from 'axios';
import CustomSpinner from "./CustomSpinner";
import loaderbar from "../loaderbar.gif";
import ExternalForm from './externalForm/ExternalForm';

let file = '';

class JustToTest extends Component {

  constructor(props) {
    super(props)
    this.selectAllRef = React.createRef();
    this.checkbox1Ref = React.createRef(),
    this.checkbox2Ref = React.createRef(),
    this.checkbox3Ref = React.createRef(),
    this.checkbox4Ref = React.createRef(),
    this.state = {
      allChecked: true,
      dictOriginal: { "availableCheck": true, "drivingCheck": true, "restingCheck": true, "workingCheck": true },
      Employee: this.props.myEmployee,
      role: '',
      status: '',
      dateDesde:new Date(),
      dateHasta: new Date(),
      dates: [],
      device: "",
      driving: [],
      working: [],
      resting: [],
      available: [],
      totalWorkingHours: 0,
      totalDrivingHours: 0,
      totalNocturnHours: 0,
      totalRestingHours: 0,
      totalAvailableHours: 0,
      totalOtherWorkingHours: 0,
      total_nat_feed_diet: 0,
      total_int_feed_diet: 0,
      total_nat_sleep_diet: 0,
      total_int_sleep_diet: 0,
      lastDate: '',
      lastPlaceDate: '',
      filters:{},
      pages:0,
      page: 1,
      activities:[],
      noData:false,
      modes: [],
      totalFest:0,
      totalWeekEnd:0,
      totalPlusKmNat:0,
      totalPlusKmInt:0,
      numReloads:0,
      diets:{},
      loaded: false,
      files:[],
      message:"",
      selectedFile:true,
      selectedProvince:"Álava",
      displayType: this.props.displayType,
      loading: false,
    }
  }
  
  async componentDidMount() {
    console.log("displaymode que llega a componentDidMount", this.props.displayType);
    await this.getDeviceType();

    if (this.props.myEmployee){
      await this.setState({Employee: this.props.myEmployee});

      this.putLoading(false)
    }

    if (!this.props.myEmployee) {
      this.setState({loaded: false});
    }else{
      this.setState({loaded: true});
      let defaultStart = new Date(await this.props.myEmployee.startString);
      let defaultEnd = new Date(await this.props.myEmployee.endString);
    
      this.setState({ diets: await this.props.myEmployee.diets });

      if (this.props.myEmployee){
        let totalNocturnHours = await this.formatOnlyTime(this.props.myEmployee.diets["hours_noct"]);
        let totalWorkingHours = await this.formatOnlyTime(this.props.myEmployee.totalWorkingHours);
        let totalDrivingHours = await this.formatOnlyTime(this.props.myEmployee.totalDrivingHours);
        let totalRestingHours = await this.formatOnlyTime(this.props.myEmployee.totalRestingHours);
        let totalAvailableHours = await this.formatOnlyTime(this.props.myEmployee.totalAvailableHours);
        let totalOtherWorkingHours = await this.formatOnlyTime(this.props.myEmployee.totalOtherWorkingHours);
      
        let filters = this.props.myEmployee['filters'];
      
        this.setState({ dateDesde: defaultStart, dateHasta: defaultEnd, filters: filters });
        let selectedPrecission = {};
        let selectedPeriod;
      
    
        if (filters) {
          // check if theres a precission filter
          if (filters.hasOwnProperty('precission')) {
            switch (filters['precission']) {
              case 'minutes':
                selectedPrecission = { label: 'Minutos', value: 'minutes' };
                break;
              case 'hours':
                selectedPrecission = { label: 'Horas', value: 'hours' };
                break;
              case 'days':
                selectedPrecission = { label: 'Dias', value: 'days' };
                break;
              case 'weeks':
                selectedPrecission = { label: 'Semanas', value: 'weeks' };
                break;
              case 'months':
                selectedPrecission = { label: 'Meses', value: 'months' };
                break;
              default:
                selectedPrecission = { label: "Meses", value: "months" };
            }
          } else {
            selectedPrecission = { label: "Meses", value: "months" };
          }
          if (filters.hasOwnProperty('period')) {
            selectedPeriod = filters["period"];
          } else {
            selectedPeriod = { label: 'Semanas', value: 'weekReports' };
          }
        } else {
          selectedPrecission = { label: "Meses", value: "months" };
        }
    
      this.setState({ selectedPeriod: selectedPeriod });
    
      this.setState({ selectedPrecission: selectedPrecission });
    
      let modesSelected;
    
      // check if there is an element 'modes' in the filters
      if (filters.hasOwnProperty('modes')) {
        if (filters['modes'].length > 0) {
          modesSelected = filters['modes'];
        } else {
          modesSelected = [
            { label: 'Conduccion', value: 'driving' },
            { label: 'Trabajo', value: 'working' },
            { label: 'Descanso', value: 'resting' },
            { label: 'Disponible', value: 'available' },
          ];
        }
      } else {
        modesSelected = [
          { label: 'Conduccion', value: 'driving' },
          { label: 'Trabajo', value: 'working' },
          { label: 'Descanso', value: 'resting' },
          { label: 'Disponible', value: 'available' },
        ];
      }
    
      this.setState({ modes: modesSelected });
    

      let dataToAnalize = await this.props.myEmployee.dataToAnalize;

    

      if (dataToAnalize.length === 0) {
        this.setState({ noData: true });
      } else {
        if (this.state.displayType === 'list') {
          let init = this.props.activityListInit;
          let end = init + 10;
          this.displayActivities(init, end);
        }
    
        let defaultStart;
        let defaultEnd;
    
        try {
          defaultStart = new Date(this.props.myEmployee.startString);
          defaultEnd = new Date(this.props.myEmployee.endString);
        } catch (err) {
          defaultStart = new Date();
          defaultEnd = new Date();
        }
    
    
        this.setState({
          dateDesde: defaultStart,
          dateHasta: defaultEnd,
          total_nat_feed_diet: this.props.myEmployee.diets["total_nat_feed_diet"],
          total_int_feed_diet: this.props.myEmployee.diets["total_int_feed_diet"],
          total_nat_sleep_diet: this.props.myEmployee.diets["total_nat_sleep_diet"],
          total_int_sleep_diet: this.props.myEmployee.diets["total_int_sleep_diet"],
          lastDate: this.props.myEmployee.lastDate,
          lastPlaceDate: this.props.myEmployee.lastPlaceDate,
          totalFest: this.props.myEmployee.diets["totalFest"],
          totalWeekEnd: this.props.myEmployee.diets["totalWeekEnd"],
          totalPlusKmNat: this.props.myEmployee.diets["totalPlusKmNat"],
          totalPlusKmInt: this.props.myEmployee.diets["totalPlusKmInt"],
          totalNocturnHours: totalNocturnHours,
          totalWorkingHours: totalWorkingHours,
          totalDrivingHours: totalDrivingHours,
          totalRestingHours: totalRestingHours,
          totalAvailableHours: totalAvailableHours,
          totalOtherWorkingHours:totalOtherWorkingHours,
        });
      }
    }
    console.log("displaymode que sale de componentDidMount", this.props.displayType);

    this.putLoading(false)

  }
}

  async selectDisplayModeTest(displayType) {
   
    await this.props.seslectDisplayMode(displayType)
    await this.setState({ displayType: displayType })

  }
   
  async formatDate(date, showTime) {
    try {
      let d = new Date(date);
      let month = (d.getMonth() + 1).toString();
      let day = d.getDate().toString();
      if (day.length < 2) {
        day = "0" + day;
      }
      //let year = d.getFullYear();
      let hours = d.getHours().toString();
      if (hours.length < 2) {
        hours = "0" + hours;
      }
      let minutes = d.getMinutes().toString();
      if (minutes.length < 2) {
        minutes = "0" + minutes;
      }
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      let dateToShow;
      if (showTime) {
        dateToShow = day + "-" + month + " " + hours + ":" + minutes;
      } else {
        dateToShow = day + "-" + month;// +" "+hours + ":"+ minutes;
      }
      return dateToShow;
    } catch (err) {
      alert("Error al formatear la fecha");
    }
  }


  
  async displayActivities(init, end) {
    // try{
      // Obtener la lista de actividades desde this.props.generalView

      let activitiesList = await this.props.myEmployee.dataToAnalize;
      var selected = [];

      // Revisa que checkboxes están seleccionados
      for (let m = 0; m < this.state.modes.length; m++) {
          let modeInList = await this.state.modes[m];
          let modeToLookUpFor;

          switch (modeInList['value']) {
              case "resting":
                  modeToLookUpFor = "Rest";
                  break;
              case "working":
                  modeToLookUpFor = "Working";
                  break;
              case "driving":
                  modeToLookUpFor = "Driving";
                  break;
              case "available":
                  modeToLookUpFor = "Available";
                  break;
          }

          selected.push(modeToLookUpFor); // Agregar el modo elegido a la lista 'selected'
      }

      // Filtrar las actividades que coinciden con los modos seleccionados
      var activitiesWithselectedMode = activitiesList.filter(({ type }) => selected.includes(type));


      let checkCalled = await this.state.checkCalled;

      if (checkCalled) {
        activitiesWithselectedMode = await provisionalList(activitiesWithselectedMode);
      }

      if (this.state.filterAlerts && activitiesWithselectedMode.length > 0) {
          // Filtrar actividades según ciertos criterios
          for (let i = activitiesWithselectedMode.length - 1; i >= 0; i--) {
              var activity = activitiesWithselectedMode[i];
              var details = activity["datails"];

              if (details === undefined) {
                  details = null;
              }

              if (
                  (activity.type === "Working" || activity.type === "Available") &&
                  activity.duration > 60 &&
                  details === null
              ) {
                  continue; // Continuar con la siguiente actividad sin eliminar esta
              } else if (activity.provisional === true) {
                  continue; // Continuar con la siguiente actividad sin eliminar esta
              } else if (details !== null) {
                  continue; // Continuar con la siguiente actividad sin eliminar esta
              } else {
                 await activitiesWithselectedMode.splice(i, 1); // Eliminar la actividad de la lista
              }
          }
      }

      // Calcular la cantidad de páginas basada en la cantidad de actividades
      let pages = Math.ceil(activitiesWithselectedMode.length / 10);
      this.setState({ pages: pages }); // Establecer la cantidad de páginas en el estado
      // Obtener las actividades que deben mostrarse en la página actual
      let activities = await activitiesWithselectedMode.slice(init, end);


      if (activities.length === 0 && this.state.numReloads < 10) {
          // Manejar la situación si no hay actividades y no se han recargado más de 10 veces
          let numReloads = this.state.numReloads + 1;
          this.setState({ numReloads: numReloads });
          this.props.editActivityListInit(1);
          this.setState({ page: 1 });
      }

      // Procesar cada actividad y darle formato
      activities= await this.formatActivities(activities);
      
      // Calcular la página actual y actualizar el estado con las actividades
      let page = Math.ceil(end / 10);
      this.setState({ activities: activities });
      this.setState({ page: page });
      this.props.editActivityListInit(0); // Finalizar la edición de la lista de actividades

      return pages; // Devolver la cantidad de páginas


    // } catch (err) {
    //   alert("Error al mostrar las actividades")
    // }
  }

  async provisionalList(activitiesWithselectedMode){
    let provisionalList = [];

    // Filtrar las actividades con detalles no vacíos
    for (let x = 0; x < activitiesWithselectedMode.length - 1; x++) {
        let element = activitiesWithselectedMode[x];
        if (element["datails"]) {
            let value = element["datails"];
            if (value[0]) {
                if (value[0] !== "") {
                    provisionalList.push(element);
                }
            }
        }
    }

    activitiesWithselectedMode = provisionalList; // Reemplazar la lista original con la lista provisional

    return activitiesWithselectedMode
  }

  async formatActivities(activities){

    var countries = {
      "Spain":"España",
      "France":"Francia",
      "Italy":"Italia",
      "Belgium":"Bélgica",
      "Netherlands":"Países Bajos",
      "Germany":"Alemania",
      "Poland":"Polonia",
      "Czechia":"Rep. Checa",
      "Czech Republic":"Rep. Checa",
      "Denmark":"Dinamarca",
      "Slovakia":"Eslovaquia",
      "Hungary":"Hungría",
      "Austria":"Austria",
      "Switzerland":"Suiza",
      "Sweden":"Suecia",
      "Luxemburg":"Luxemburgo",
      "Finland":"Finlandia",
      "Norway":"Noruega",
      "Romania":"Rumanía",
      "Bulgaria":"Bulgaria",
      "Croatia":"Croacia",
      "Greece":"Grecia",
      "Slovenia":"Eslovenia",
      "Estonia":"Estonia",
      "Ireland":"Irlanda",
      "Lithuania":"Lituania",
      "Latvia":"Letonia",
      "Portugal":"Portugal",
      "Serbia":"Serbia",
      "Albania":"Albania"
    };
  

    // Procesar cada actividad y darle formato
    for (let i = 0; i < activities.length; i++) {
      let dateInt = parseInt(activities[i]["start"]) * 1000;
      let dateFormat = await this.formatDate(dateInt, true);
      activities[i]["startFormat"] = dateFormat;

      let type = activities[i]["type"];
      let typeFormat;
      let displaced = "";
      let place = activities[i]["place"];

      if (countries.hasOwnProperty(place)) {
        // Si existe, reemplazar el valor en la actividad
        activities[i]["place"] = countries[place];
      }

      let employee = await this.props.myEmployee.id;
      let name = employee['name'];

      if (activities[i]["displaced"] === true) {
          displaced = "Desplazado";
      }

      let regionE = "";

      if (activities[i]["region"] != "Unknown") {
          regionE = ", " + activities[i]["region"];
      }

      switch (type) {
          case "Rest":
              typeFormat = "Descanso";
              break;
          case "Working":
              typeFormat = "Trabajando";
              break;
          case "Driving":
              typeFormat = "Conducción";
              break;
          case "Available":
              typeFormat = "Disponible";
              break;
          case "Desconocido":
              typeFormat = "Desconocido";
              break;
      }

      let dietFormat = "";
      let diet = activities[i]["dietType"];
      dietFormat = diet;

      let durationFormat = await this.formatOnlyTime(parseInt(activities[i]["duration"]));
      let nocturnasFormat;

      if (activities[i]["nocturnas"]) {
          nocturnasFormat = await this.formatOnlyTime(parseInt(activities[i]["nocturnas"]));
      } else {
          nocturnasFormat = "";
      }

      let colorConduccion;
      if (type === "Driving" && parseInt(activities[i]["duration"]) > 270) {
          colorConduccion = "red";
      }

      // Agregar propiedades con formato a la actividad
      activities[i]["typeFormat"] = typeFormat;
      activities[i]["durationFormat"] = durationFormat;
      activities[i]["dietFormat"] = dietFormat;
      activities[i]["displaced"] = displaced;
      activities[i]["regionE"] = regionE;
      activities[i]["colorConduccion"] = colorConduccion;
      activities[i]["nocturnasFormat"] = nocturnasFormat;
      activities[i]["name"] = name;
  }

    return activities
  }


  async formatOnlyTime(minutes) {
    try {
      var durationFormat
      let durHours = Math.floor(minutes / 60)
      let durMinutes = minutes - (durHours * 60)
      let durMinutesRound = await Math.floor(durMinutes)
      let durMinutesString = await String(durMinutesRound)

      if (durMinutesString.length < 2) {
        durMinutesString = "0" + durMinutesString
      }

      durationFormat = String(durHours) + ":" + durMinutesString
      return durationFormat
    } catch (err) {
      setTimeout(() => window.location.reload(), 2000)
    }
  }

  async searchPending(){


    let checkCalled = this.state.checkCalled

    if (checkCalled){
      await this.setState({checkCalled:false})
    }else{
      await this.setState({checkCalled:true})
    }


    this.props.editActivityListInit(0)

    setTimeout(() => this.displayActivities(0, 10), 1);
    
  }

  async handleChangeModes(variableRecibe) {
    // try{
      let modesList = []
      let nameIt
      let dictValue
      let updatedDict = { ...this.state.dictOriginal };

      if(variableRecibe==="allConflict"){
        Object.keys(updatedDict).forEach(key => {
          updatedDict[key] = true;
        });
        this.setState({ dictOriginal: updatedDict });

        setTimeout(() => startList(), 1);

        function startList() {
          modesList.push({label:"Disponible", value:"available"})
          modesList.push({label:"Conducción", value:"driving"})
          modesList.push({label:"Descanso", value:"resting"})
          modesList.push({label:"Trabajo", value:"working"})
        }
      } 
      
      if (updatedDict.hasOwnProperty(variableRecibe)) {
        updatedDict[variableRecibe] = !updatedDict[variableRecibe];
        this.setState({dictOriginal: updatedDict});
        setTimeout(() => verification(), 1);
        function verification(){
          for (let index in updatedDict) {
            if (updatedDict[index]) {
              switch (index) {
                case 'availableCheck':
                  nameIt = 'Disponible';
                  dictValue = 'available';
                  break;
                case 'drivingCheck':
                  nameIt = 'Conducción';
                  dictValue = 'driving';
                  break;
                case 'restingCheck':
                  nameIt = 'Descanso';
                  dictValue = 'resting';
                  break;
                case 'workingCheck':
                  nameIt = 'Trabajo';
                  dictValue = 'working';
                  break;
              }
              modesList.push({label:nameIt, value: dictValue})
            }
          }
        }
      } else if (variableRecibe == "all"){
        Object.keys(updatedDict).forEach(key => {
          updatedDict[key] = true;
        });
        this.setState({ dictOriginal: updatedDict });

        setTimeout(() => startList(), 1);

        function startList() {
          modesList.push({label:"Disponible", value:"available"})
          modesList.push({label:"Conducción", value:"driving"})
          modesList.push({label:"Descanso", value:"resting"})
          modesList.push({label:"Trabajo", value:"working"})
        }
      }

      let filters = this.state.filters
      filters['modes'] = modesList

      await this.setState({
        filters: filters,
        modes: modesList,
      })
    

      this.props.editActivityListInit(0)
      setTimeout(() => this.displayActivities(0, 10), 1);
    // }catch(err){
    //   alert("Error al seleccionar el modo")
    // }
  }
  
  async handleChangeDesde(dateDesde) {
    try {
      this.setState({
        dateDesde: dateDesde,
      });
    } catch (err) {
      alert("Error al indicar la fecha inicial");
    }
  }
  
  async handleChangeHasta(dateHasta) {
    try {
      // get desdeHasta timestamp
      this.setState({
        dateHasta: dateHasta
      });
    } catch (err) {
      alert("Error al indicar la fecha final");
    }
  }

  handleChangeProvince = (event) => {
    const selectedProvince = event.target.value;    
    this.setState({ selectedProvince });
  };

  handleChangeFile = async (event) => {
    let fileList = file.files;

    
    if (file.files.length > 0) {
      var currentFiles = this.state.files;
      for (let key in fileList) {
        if (
          fileList[key].name !== undefined &&
          fileList[key].name !== 'item'
        ) {
          if (
            fileList[key].name.slice(-4) === ".tgd" ||
            fileList[key].name.slice(-4) === ".ddd" ||
            fileList[key].name.slice(-4) === ".DDD" ||
            fileList[key].name.slice(-4) === ".TGD" ||
            fileList[key].name.slice(-5) === ".xlsx" ||
            fileList[key].name.slice(-5) === ".XLSX"
          ) {
            currentFiles.push(fileList[key]);
            let message;
            if (currentFiles.length === 1) {
              message = currentFiles[0].name;
            } else {
              message = currentFiles.length.toString() + " archivos";
            }
            this.setState({
              files: currentFiles,
              message: message
            });
          } else {
            this.setState({ files: [] });
            this.setState({ message: 'Archivo incorrecto' });
          }
        }
      }
    }
  };

  async putLoading(boolValue) {       
    await this.setState({ loading: boolValue })
  }


  onFileUpload = async () => {
    this.putLoading(true);
    let arrayOfYourFiles = this.state.files;

    const formData = new FormData();

    if (arrayOfYourFiles.length === 0) {
      this.setState({ message: 'Suba un archivo .xls o .tgd' });
      this.putLoading(false);
    } else if (arrayOfYourFiles[0].name.endsWith('.xlsx') || arrayOfYourFiles[0].name.endsWith('.XLSX')) {

      formData.append('UploadFile', arrayOfYourFiles[0]);
      formData.append('file', arrayOfYourFiles[0]);
      formData.append('fileName', arrayOfYourFiles[0]);

      let token = this.props.userToken;
      if (token !== 'null') {
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
            "Authorization": "Bearer " + token
          }
        };

        axios.post(this.props.endPoint + "uploadXLSfile/", formData, config)
          .then((response) => {
            this.setState({ message: 'Archivo subido correctamente.' });
            this.putLoading(false);
          })
          .catch(error => {
            if (error.response.status == 403) {
              this.setState({ files: [] });
              alert('Archivo vacío. Suba un archivo válido');
              this.putLoading(false);
            }
          });

        this.setState({ files: [] });
        setTimeout(() => window.location.reload(), 5000);
      } else {
        this.setState({ files: [] });
        alert('Para subir un archivo excel, necesita registrarte');
      }
    } else {

      for (let i = 0; i < arrayOfYourFiles.length; i++) {
        formData.append('files', arrayOfYourFiles[i]);
      }

      var token = this.props.userToken;
      let url;
      let config;

      if (token === "null" || token === null) {       
        var employee;
        config = {
          headers: {
            'content-type': 'multipart/form-data'
          },
        };

        url = this.props.endPoint + "uploadTGDfileTest/";

        await axios.post(url, formData, config).then((response) => {
          employee = response.data;
          this.setState({ Employee: employee });
          this.props.setEmployee(employee);
        });
      }

      this.setState({ files: [] });
      this.setState({loaded: true});
      this.componentDidMount();
      this.putLoading(false);
    }
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <p>{this.state.message}</p>
        </div>
      );
    } else {
      return (
        <div>
          Selecciona un archivo
        </div>
      );
    }
  };

  async getDeviceType() {
    try {
      const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (winWidth < 768) {
        this.setState({ device: "mobile" });
      } else {
        this.setState({ device: "desktop"  });
      }    
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al detectar el tipo de dispositivo' })

    }
  }
  
  render() {

    // try{

    
      var textButtonColor = "white"
      var listButtonColor = "white"

      var paginator = <div></div>

      let controlpanel = <div></div>      

      let provinceSelector = 
        <div>
          <label style={{fontSize: "20px"}}>Selecciona tu provincia para aplicar el convenio correspondiente</label>          
          <select class="form-select" onChange={this.handleChangeProvince}> 
            <option value="Álava">Álava</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almería">Almería</option>
            <option value="Asturias">Asturias</option>
            <option value="Ávila">Ávila</option>
            <option value="Badajoz">Badajoz</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Burgos">Burgos</option>
            <option value="Cáceres">Cáceres</option>
            <option value="Cádiz">Cádiz</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castellón">Castellón</option>
            <option value="Ciudad Real">Ciudad Real</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Gerona">Gerona</option>
            <option value="Granada">Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Guipúzcoa">Guipúzcoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca">Huesca</option>
            <option value="Islas Baleares">Islas Baleares</option>
            <option value="Jaén">Jaén</option>
            <option value="La Coruña">La Coruña</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Las Palmas">Las Palmas</option>
            <option value="León">León</option>
            <option value="Lérida">Lérida</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid" defaultValue >Madrid</option>
            <option value="Málaga">Málaga</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Orense">Orense</option>
            <option value="Palencia">Palencia</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
            <option value="Segovia">Segovia</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria">Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Vizcaya">Vizcaya</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>
          </select>
          <ExternalForm />
        </div>

      let display = <div></div>
      
      let loader = <div></div>

      let loaderbar = 
        <div>
          <img src={loader}></img>
        </div>

      let selector = <div></div>

      switch(this.state.displayType){    
        case 'text':
          textButtonColor = "#dddddb"
          break; 
        default:
          listButtonColor = "#dddddb"
          break;  
      }

      /////////////////////////////////////////////////////////

      if(this.state.loading === true) {
        
          loader = 
            <div style={{ maxWidth: "100%", marginTop: 20, marginBottom: 20, }}>
              <CustomSpinner 
                device={this.state.device}
              />
            </div>
      }


      //si no hemos cargado un tgd
      if (this.state.loaded === false || this.props.myEmployee === undefined) {  
        
        display = 
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <div style={{ textAlign: 'center' }}>
              {provinceSelector}
              <br />
              <input id='fileUpload' type='file' name="file" onChange={this.handleChangeFile} ref={(input) => { file = input; }} multiple hidden />
              <label className="btn btn-primary btn-block btn-lg" style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd', fontSize: 14 }} htmlFor="fileUpload">
                Seleccionar archivo
              </label>
              <br/><br />
              <button className="btn btn-primary btn-block btn-lg" style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd', fontSize: 14 }} onClick={this.onFileUpload}>
                Subir archivo
              </button>
              </div>
              <br/>
              <div>
                {loader}
              </div>
              <br />            
              {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type='checkbox' required></input> <span>Al hacer clic en Subir archivo aceptas la <a href="https://www.traxain.com/legal" target="_blank">Política de privacidad de Traxain</a></span>
              <br/>
            </div> */}
            <br/>
            <div>
              {this.fileData()}
            </div>
          </div>

        
        return (
          <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"center",width:'100%'}}>          
            <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"center",width:'100%'}}>
              <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%',textAlign:"center"}}>
                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%',textAlign:"center"}}>
                  <b>
                    Sube aquí tus archivos TGD
                  </b>
                </td>
              </tr>                  
              <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"center",width:'100%'}}>
                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"center",width:'100%'}}>
                  <div className="card mb-4"  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%'}} >
                    <div className="card-body"  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"center",width:'100%'}}>
                      {display}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>        
        );
      }
      // si hemos cargado un tgd 
      else{        
        //si el dispositivo es escritorio
        if (this.state.device === 'desktop') {

          controlpanel =
            <table className="table-borderless" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>    
                <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}>    
                    <table>
                      <tbody>
                        <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%" }}>
                          <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "center" }}>    
                            <div className="positive button" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ backgroundColor: textButtonColor }} onClick={(event) => {
                              event.preventDefault()
                              this.selectDisplayModeTest('text')
                            }}>
                              Texto
                            </div>    
                          </td>
                          <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%", "textAlign": "center" }}>    
                            <div className="positive button" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ backgroundColor: listButtonColor }} onClick={(event) => {
                              event.preventDefault()
                              this.selectDisplayModeTest('list')
                              let init = this.props.activityListInit;
                              let end = init + 10;
                              this.displayActivities(init, end)                
                            }}>
                              Actividad
                            </div>    
                          </td>
                        </tr>
                      </tbody>
                    </table>    
                  </td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}></td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}></td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}></td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}></td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}></td>    
                </tr>    
                <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}></td>    
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}>    
                  </td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}>
                    <div className="input-group mb-4" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '80%' }}>
                      
                    </div>
                  </td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}>
                    <div className="input-group mb-4" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '80%' }}>
                      
                    </div>
                  </td>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%" }}>
                    <form onSubmit={(event) => {    
                      event.preventDefault()
                      this.putLoading(true)

                      let myEmployeeID = this.props.myEmployee.id

                      let filters = this.state.filters
                      let desde = this.state.dateDesde
                      if (desde === '') {
                        desde = 0;
                      } else {
                        desde = parseInt(desde.getTime() / 1000);
                      }

                      let hasta = this.state.dateHasta
                      if (hasta === '') {
                        hasta = 0;
                      } else {
                        hasta = parseInt(hasta.getTime() / 1000);
                      }      

                      this.setState({Employee:undefined})
                      console.log("displayType antes", this.state.displayType)
                      this.props.search(myEmployeeID, desde, hasta, filters, true, "", true)
                      console.log("displayType despues", this.state.displayType)
                      setTimeout(() => this.componentDidMount(), 2000 );

                    }}>
                       </form>
                  </td>
                </tr>    
              </tbody>
            </table>


          //si estamos viendo texto
          if (this.state.displayType === 'text') {



            display =
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <table className="table-borderless" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                  <tbody>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Horas de trabajo totales</td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Horas de conducción</td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Horas de otros trabajos</td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Horas de disponibilidad</td>
                    </tr>
            
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "green" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22 }}>{this.state.totalWorkingHours}</b> h:m
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22 }}>{this.state.totalDrivingHours} </b> h:m
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22 }}>{this.state.totalOtherWorkingHours} </b> h:m
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22 }}>{this.state.totalAvailableHours} </b> h:m
                      </td>
                      <br></br><br></br>
                    </tr>
            
                    <tr scope="row">
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Horas de descanso</td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Horas de nocturnidad</td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Km Nacional</td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>Km Inter</td>
                    </tr>
            
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "green" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22 }}>{this.state.totalRestingHours} </b> h:m
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22 }}>{this.state.totalNocturnHours} </b> h:m
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        Nº:<b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 16 }}> {this.state.diets["num_KmNat"]}</b> <br></br>
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "left" }}>
                        Nº:<b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 16 }}> {this.state.diets["num_KmInt"]}</b> <br></br>
                      </td>
                      <br></br><br></br>
                    </tr>      
                    <br/>
                  </tbody>
                </table>
                <br/>
                <table className="table-borderless" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                  <tbody>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "17%", "textAlign": "left" }}></td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%", "textAlign": "center" }}>
                        <div className="card mb-4" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                          <div className="card-body" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: '100%' }}>
                            Estás usando la versión gratuita, para ver la cuantía de tus dietas y complementos, crea una cuenta con tu correo y contraseña o ponte en contacto con nosotros
                          </div>
                        </div>
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "17%", "textAlign": "left" }}>
                      </td>                      
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", "textAlign": "center" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "17%", "textAlign": "left" }}></td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%", "textAlign": "center" }}>
                        <div  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                          <div  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: '80%' }}>
                            {loader}
                          </div>
                        </div>
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "17%", "textAlign": "left" }}>
                      </td>                      
                    </tr>
                  </tbody>
                </table>
              Último dato de actividad: {this.props.myEmployee.lastDate}<br></br>
              </div>

          }
          //si estamos viendo actividades
          else{

            //paginator
            if (this.state.pages > 1 && this.state.page !== ""){
              var page = this.state.page
              var pages = this.state.pages
              var init = (page - 1) * 10
              var end = page * 10
              var paginator =
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                  <br/>
                  <div> Página {page} de {pages} </div>
                  <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                    <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>                  
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "25%" }}>
                          <button className="btn btn-outline-secondary" onClick={(event) => {
                            event.preventDefault()
                            if (page > 1) {
                              this.setState({ page: page - 1 })
                              init = init - 10
                              end = end - 10
                            }
                            this.displayActivities(init, end)}}>
                            Anterior
                          </button>
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "25%" }}>
                          <button className="btn btn-outline-secondary" onClick={(event) => {
                            event.preventDefault()
                            if (page < pages) {
                              this.setState({ page: page + 1 })
                              init = init + 10
                              end = end + 10
                            }
                            this.displayActivities(init, end)}}>
                            Siguiente
                          </button>
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            }
      
            if (this.state.noData) {
              display = <div>No hay nada en estas fechas, cambia la selección</div>;
            } else {
              //si hay datos en actividad
              
              var listControlPanel = 
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{"width":"100%"}} className="selectOptions">
                  <label style={{ fontSize: "20px" }}>
                    <input type="checkbox" ref={this.checkbox1Ref} className="boxFuncion boxPosicion" onChange={() => this.handleChangeModes("availableCheck")} defaultChecked />
                    Disponible
                  </label>
                  <label style={{ fontSize: "20px" }}>
                    <input type="checkbox" ref={this.checkbox2Ref} className="boxFuncion boxPosicion" onChange={() => this.handleChangeModes("drivingCheck")} defaultChecked />
                    Conducción
                  </label>
                  <label style={{ fontSize: "20px" }}>
                    <input type="checkbox" ref={this.checkbox3Ref} className="boxFuncion boxPosicion" onChange={() => this.handleChangeModes("restingCheck")} defaultChecked />
                    Descanso
                  </label>
                  <label style={{ fontSize: "20px" }}>
                    <input type="checkbox" ref={this.checkbox4Ref} className="boxFuncion boxPosicion" onChange={() => this.handleChangeModes("workingCheck")} defaultChecked />
                    Trabajando
                  </label>
                </div>


              var displayList =
                <div id="content" className="mt-3">
                  <div className="card mb-4">
                    {paginator}
                    <div className="card-body">
                      <table className="table" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 14 }}>
                        <thead>
                          <tr>
                            <th scope="col">Actividad</th>
                            <th scope="col">Inicio</th>
                            <th scope="col">Duración</th>
                            <th scope="col">Nocturnidad</th>
                            <th scope="col">Estatus</th>
                            <th scope="col">Km</th>
                            <th scope="col">Lugar</th>
                          </tr>
                        </thead>
                        <tbody id="productList">
                          {this.state.activities.map((empl, key) => {
                            var statusText = ""
                            var statusStyle = "green"
                            var latitude_longitude = ""
                            let message_button = <div></div>

                            if (this.state.activities[key]["latitude"] && this.state.activities[key]["longitude"]) {
                              let lat = String(this.state.activities[key]["latitude"] / 1000)
                              let lon = String(this.state.activities[key]["longitude"] / 1000)
                              let url = "https://gps-coordinates.org/my-location.php?lat=" + lat + "&lng=" + lon
                              latitude_longitude = <a href={url} target="_blank">Ver ubicación</a>
                            }

                            var details = this.state.activities[key]["datails"]

                            if (this.state.activities[key]["provisional"] === true) {
                              statusText = ""
                              statusStyle = "red"
                            } 
                            
                            if (details !== null) {
                              if (details[0] !== " "){
                              statusStyle = "green"
                              statusText = "Editado"
                            }
                            }

                            var element
                            const charachters = 20
                            var output = ""

                            if (details) {
                              for (let i = 0; i < details.length; i++) {
                                element = details[i]
                                let numberOfLines = element.length / charachters
                                for (let c = 0; c < numberOfLines; c++) {
                                  let row = element.substring(c * charachters, (c + 1) * charachters)
                                  output = output + <br></br> + row
                                }

                                output = output + <br></br>
                              }
                            }


                            return (
                              <tr key={key} styles={{ width: "100%" }}>
                                <td style={{ width: "15%"}}>{this.state.activities[key]["typeFormat"]}</td>
                                <td style={{ width: "15%" }}>{this.state.activities[key]["startFormat"]}</td>
                                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", color: this.state.activities[key]["colorConduccion"] }}><b>{this.state.activities[key]["durationFormat"]}</b></td>
                                <td style={{ width: "5%", color: "blue" }}>{this.state.activities[key]["nocturnasFormat"]}</td>
                                <td style={{ width: "15%", "color": statusStyle }}>{statusText ? statusText + "\n" : ""}</td>
                                <td style={{ width: "5%", "color": "green" }}>{this.state.activities[key]["kilometers"]}</td>
                                <td style={{ width: "15%" }}>{this.state.activities[key]["place"] + this.state.activities[key]["regionE"]}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
  
              display = 
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                  <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                    <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                        {listControlPanel}
                      </tr>
                      <tr>
                        {displayList}
                      </tr>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%", textAlign:"center"}}>
                        {loader}
                      </tr>
                    </tbody>
                  </table>
                </div>      
            }
          }          
        }else{             
          //si el dispositivo es movil

          selector =
            <table>
              <tbody>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "25%", "textAlign": "center" }}>    
                    <div className="positive button" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{backgroundColor: textButtonColor, borderRadius: "5px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center",}}
                          onClick={(event) => {
                            event.preventDefault();
                            this.selectDisplayModeTest('text');
                          }}>
                      Resumen
                    </div>                  
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "20%", "textAlign": "center" }}>    
                     <form onSubmit={(event) => {                          
                      event.preventDefault()
                      this.putLoading(true)


                      let myEmployeeID = this.props.myEmployee.id
                      let filters = this.state.filters
                      let desde = this.state.dateDesde
                      if (desde === '') {
                        desde = 0    
                      } else {
                        desde = parseInt(desde.getTime() / 1000)
                      }
        
                      let hasta = this.state.dateHasta
                      if (hasta === '') {
                        hasta = 0
        
                      } else {
                        hasta = parseInt(hasta.getTime() / 1000)
                      }
                      console.log(this.state.loading)
                      this.props.search(myEmployeeID, desde, hasta, filters, true)
                      setTimeout(() => this.componentDidMount(), 2000 );
                    }}>
                      <button type="submit" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} className="btn btn-primary btn-block btn-lg">Consultar</button>
                    </form>
                    <br></br>
                  </td>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "fontSize": 6 }}>
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "50%" }}>
                    <div className="positive button" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "50%", backgroundColor: textButtonColor }} onClick={(event) => {
                      event.preventDefault()
                      this.selectDisplayModeTest('text')
                    }}>
                      Texto
                    </div>
                  </td>    
                  <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "50%" }}>
                    <div className="positive button" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "50%", backgroundColor: listButtonColor }} onClick={(event) => {
                      event.preventDefault()

                      this.selectDisplayModeTest('list')
                      let init = this.props.activityListInit;
                      let end = init + 10;
                      this.displayActivities(init, end)                
                    }}>
                      Actividades
                    </div>    
                  </td>
                </tr>
              </tbody>
            </table>

          controlpanel =
            <div style={{ width: "100%", textAlign: "center" }}>
              <div>Filtro por fecha</div>
              <table className="table-borderless" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>    
                  <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>    
                    <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "50%" }}></td>    
                    <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "50%" }}></td>    
                  </tr>
                  <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>    
                    <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "50%" }}>
                      <div className="input-group mb-4" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                        
                      </div>
                    </td>
                    <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "50%" }}>    
                      <div className="input-group mb-4" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                        
                      </div>    
                    </td>
                  </tr>
                </tbody>
              </table>
              <form onSubmit={(event) => {    
                  event.preventDefault()
                  this.putLoading(true)

                  let myEmployeeID = this.props.myEmployee.id

                  let filters = this.state.filters
                  let desde = this.state.dateDesde
                  if (desde === '') {
                    desde = 0;
                  } else {
                    desde = parseInt(desde.getTime() / 1000);
                  }
    
                  let hasta = this.state.dateHasta
                  if (hasta === '') {
                    hasta = 0;
                  } else {
                    hasta = parseInt(hasta.getTime() / 1000);
                  }      

                  this.setState({Employee:undefined})
                  console.log("displayType antes", this.state.displayType)
                  this.props.search(myEmployeeID, desde, hasta, filters, true, "", true)
                  console.log("displayType despues", this.state.displayType)
                  setTimeout(() => this.componentDidMount(), 2000 );
                }}>
                 </form> 
            </div>

          if (this.state.displayType === 'text'){

            display =
              <div style={{ maxWidth: "100%" }}>
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", padding: 5, marginTop: 10, textAlign: "center", border: "1px solid rgba(0,0,0,.125)", borderRadius: "5px" }}>
                  <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg">
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": window.innerWidth, textAlign: "center" }}>
                      {loader}
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Horas totales    
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}>{this.state.totalWorkingHours}</b> h:m
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Horas de conducción    
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}>{this.state.totalDrivingHours} </b> h:m
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Horas de otros trabajos    
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}>{this.state.totalOtherWorkingHours} </b> h:m
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Horas de disponibilidad    
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}>{this.state.totalAvailableHours} </b> h:m
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Horas de descanso    
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}>{this.state.totalRestingHours} </b> h:m
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Horas de nocturnidad   
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}>{this.state.totalNocturnHours} </b> h:m
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Km Nacional   
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}> {this.state.diets["num_KmNat"]}</b> km
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>Km Internacional   
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green" }}> {this.state.diets["num_KmInt"]}</b> km
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center"}}>Datos más recientes   
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", textAlign: "center" }}>
                      <b nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 22, color: "green"}}>{this.props.myEmployee.lastDate}</b>
                    </tr>
                    <br/>
                  </tbody>
                </table>
                <br/>
                <table className="table-borderless" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                  <tbody>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", "textAlign": "center" }}>
                        <div className="card mb-4" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                          <div className="card-body" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: '100%' }}>
                            Estás usando la versión gratuita, para ver la cuantía de tus dietas y complementos, crea una cuenta con tu correo y contraseña o ponte en contacto con nosotros
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", "textAlign": "center" }}>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "17%", "textAlign": "left" }}></td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%", "textAlign": "center" }}>
                        <div  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                        </div>
                      </td>
                      <td scope="col" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "17%", "textAlign": "left" }}>
                      </td>                      
                    </tr>
                  </tbody>
                </table>
              </div>

          }else{

            //paginator
            if (this.state.pages > 1 && this.state.page !== ""){
              var page = this.state.page
              var pages = this.state.pages
              var init = (page - 1) * 10
              var end = page * 10
              var paginator =
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                  <br/>
                  <div> Página {page} de {pages} </div>
                  <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                    <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>                  
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "25%" }}>
                          <button className="btn btn-outline-secondary" onClick={(event) => {
                            event.preventDefault()
                            if (page > 1) {
                              this.setState({ page: page - 1 })
                              init = init - 10
                              end = end - 10
                            }
                            this.displayActivities(init, end)}}>
                            Anterior
                          </button>
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "25%" }}>
                          <button className="btn btn-outline-secondary" onClick={(event) => {
                            event.preventDefault()
                            if (page < pages) {
                              this.setState({ page: page + 1 })
                              init = init + 10
                              end = end + 10
                            }
                            this.displayActivities(init, end)}}>
                            Siguiente
                          </button>
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            }
      
            if (this.state.noData) {
              display = <div>No hay nada en estas fechas, cambia la selección</div>;
            } else {

              var listControlPanel = 
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{"width":"100%", marginTop:"10px"}}>
                  <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", "textAlign": "center" }}>
                    <td scope='col' style={{"width":"50%"}}>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={this.checkbox1Ref} onChange={() => this.handleChangeModes("availableCheck")} defaultChecked/>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Disponible</label>
                      </div>
                    </td>
                    <td scope='col' style={{"width":"50%"}}>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={this.checkbox2Ref} onChange={() => this.handleChangeModes("drivingCheck")} defaultChecked/>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Conducción</label>
                      </div>
                    </td>
                  </tr>
                  <tr scope="row" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%", "textAlign": "center" }}>
                    <td scope='col' style={{"width":"50%"}}>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={this.checkbox3Ref} onChange={() => this.handleChangeModes("restingCheck")} defaultChecked/>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Descanso</label>
                      </div>
                    </td>
                    <td scope='col' style={{"width":"50%"}}>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={this.checkbox4Ref} onChange={() => this.handleChangeModes("workingCheck")} defaultChecked/>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Trabajando</label>
                      </div>
                    </td>
                  </tr>
                </table>


              var displayList =
                <div id="content" className="mt-3">
                  <div className="card mb-4" style={{maxWidth: "100%", overflow: "scroll" }}>
                    {paginator}
                    <div className="card-body" >
                      <table className="table" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 14 }}>
                        <thead>
                          <tr>
                            <th scope="col">Actividad</th>
                            <th scope="col">Inicio</th>
                            <th scope="col">Duración</th>
                            {window.innerWidth > 500 && (
                            <th scope="col">Nocturnidad</th>)}
                            <th scope="col">Km</th>
                            <th scope="col">Lugar</th>
                          </tr>
                        </thead>
                        <tbody id="productList">
                          {this.state.activities.map((empl, key) => {
                            var statusText = ""
                            var statusStyle = "green"
                            var latitude_longitude = ""
                            let message_button = <div></div>

                            if (this.state.activities[key]["latitude"] && this.state.activities[key]["longitude"]) {
                              let lat = String(this.state.activities[key]["latitude"] / 1000)
                              let lon = String(this.state.activities[key]["longitude"] / 1000)
                              let url = "https://gps-coordinates.org/my-location.php?lat=" + lat + "&lng=" + lon
                              latitude_longitude = <a href={url} target="_blank">Ver ubicación</a>
                            }

                            var details = this.state.activities[key]["datails"]

                            if (this.state.activities[key]["provisional"] === true) {
                              statusText = ""
                              statusStyle = "red"
                            } 
                            
                            if (details !== null) {
                              if (details[0] !== " "){
                              statusStyle = "green"
                              statusText = "Editado"
                            }
                            }

                            var element
                            const charachters = 20
                            var output = ""

                            if (details) {
                              for (let i = 0; i < details.length; i++) {
                                element = details[i]
                                let numberOfLines = element.length / charachters
                                for (let c = 0; c < numberOfLines; c++) {
                                  let row = element.substring(c * charachters, (c + 1) * charachters)
                                  output = output + <br></br> + row
                                }

                                output = output + <br></br>
                              }
                            }


                            return (
                              <tr key={key} styles={{ width: "100%" }}>
                                <td style={{ width: "15%"}}>{this.state.activities[key]["typeFormat"]}</td>
                                <td style={{ width: "15%" }}>{this.state.activities[key]["startFormat"]}</td>
                                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", color: this.state.activities[key]["colorConduccion"] }}><b>{this.state.activities[key]["durationFormat"]}</b></td>
                                {window.innerWidth > 500 && (
                                  <td style={{ width: "5%", color: "blue" }}>{this.state.activities[key]["nocturnasFormat"]}</td>
                                )}                                
                                <td style={{ width: "5%", "color": "green" }}>{this.state.activities[key]["kilometers"]}</td>
                                <td style={{ width: "15%" }}>{this.state.activities[key]["place"] + this.state.activities[key]["regionE"]}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              
              display = 
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                  <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                    <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%"}}>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%", marginBottom:"10px", textAlign:"center"}}>
                        {listControlPanel}
                        {loader}
                      </tr>
                      <tr>
                        {displayList}
                      </tr>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%", textAlign:"center"}}>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>

            }
          }
        }   


        return (
          <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
            <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
              {selector}
            </div>
            <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
              {controlpanel}
            </div> 
            <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
              {display}
            </div>
          </div>
        )
       
      }

      
    // }catch(err){
    // return(<div>Error al cargar los detalles, asegúrate de que el archivo es un archivo de Conductor correcto. Para usar archivos de vehículo, crea una cuenta o contacta con nostros.</div>)
    // }
  }

}

export default JustToTest;
