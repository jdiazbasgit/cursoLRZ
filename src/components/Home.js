
import React, { Component } from 'react'
import Navbar from './Navbar'
import ErrorHappened from './ErrorHappened'
import ErrorExpirated from './ErrorExpirated'
import fondoAvif from '../carretera.avif'
import camionesAvif from '../camiones_aparcados.avif'
import fondoPNG from '../carretera.png'
import camionesPNG from '../camiones_aparcados.png'
import camionesMovimiento from '../fondomovimiento.webp'
import JustToTest from './JustToTest'
import Footer from './Footer'
import CustomSpinner from './CustomSpinner'
import '@fortawesome/fontawesome-free/css/all.css';
import fondoMovil from '../camiones_aparcados.avif'
import truck from '../truck.webp'


class Home extends Component {

  constructor(props) {
    super(props)
    this.childRefEmployee = React.createRef()
    this.childRefGeneral = React.createRef()
    this.childRefHandle = React.createRef()
    this.childRefDisplayAct= React.createRef()   
    
    this.state = {
      endPoint: "http://localhost:8000/",
      camionesFinal: camionesPNG,
      fondoFinal: fondoPNG,
      filterAlerts:false,
      filterDiets: false,
      allowed: '',
      winWidth: 0,
      winHeight: 0,
      chargeStatusTGD: 0,
      loading: false,
      employeesList: [],
      managersList: [],
      activitiesList: [],
      thisEmloyeeId: {},
      myEmployee: undefined,
      somethingSearched: 0,
      wantToCreate: true,
      wantToCreateManager: false,
      dontCall: false,
      userRole: '',
      errorHappened: false,
      errorExpirated: false,
      myEmployeeCount: '',
      device: '',
      date: '',
      errorMsg: '',
      selectedMode: '',
      userToken: "",
      currentUser: null,
      product: 'autonomina',
      askLogin: 6,
      displayType: 'text',
      start: 0,
      end: 0,
      originTrip: '',
      destinationTrip: '',
      modeTrip: '',
      dateTrip: 0,
      filters: {},
      generalView: [],
      showModalActivity: false,
      showSendSmsActivity: false,
      showLastModal: '',
      selectedActivity: 0,
      selectedActivityDict:{},
      listInit: 0,
      activityListInit: 0,
      tripsListInit: 0,
      defaultComments: '',
      defaultPlace: '',
      defaultIdentifier: '',
      employeesSelectedToShow: [],
      employeesSelected: [],
      askContCred: false,
      newPassAsked: false,
      showANDirecto: false,
      showNavigatorModal: false,
      showLoginModalVar: false,
      showRegisterModalVar: false,
      showCreateTripFields: false,
      showPeriodModal:false,
      showTripModal:false,
      showCheckStateModal:false,
      activeProcessId: 0,
      selectedPeriod:0,
      selectedTrip:0,
      employees: [],
      tac_provider: '',
      askTacProvider: false,
      showPlaceholderOthers: false,
      upLoadTGDManually: true,
      periodsListInit: 0,
      stringToSearch: '',
      showList: true,
      showListManager: false,
      pointer: 0,
      showSimulator: false,
      showTestDetails: false,
      showHolidays: false,
      pageFullyLoaded: false,
      numberOfFiles: 0,
      passedCalls:0,
      stateHistory: [],
      stateFuture: [],
      backClicsCount: 0,
      childHistory: [],
      childFuture: [],
      filteredActivities: [],
      estadosGuardados: [],
      reloadEmployees: false
    }

    this.errorStatus = this.errorStatus.bind(this)
    this.showError = this.showError.bind(this)
    this.search = this.search.bind(this)
    this.seslectDisplayMode = this.seslectDisplayMode.bind(this)
    this.showModalActivity = this.showModalActivity.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onCloseNav = this.onCloseNav.bind(this)
    this.onCloseLog = this.onCloseLog.bind(this)
    this.onCloseReg = this.onCloseReg.bind(this)
    this.editActivityDetails = this.editActivityDetails.bind(this)
    this.editActivityListInit = this.editActivityListInit.bind(this)
    this.getParams = this.getParams.bind(this)
    this.showNavigatorModal = this.showNavigatorModal.bind(this)
    this.showLoginModal = this.showLoginModal.bind(this)
    this.showRegisterModal = this.showRegisterModal.bind(this)
    this.putLoading = this.putLoading.bind(this)
    this.setEmployee = this.setEmployee.bind(this)
    this.putFilterAlerts = this.putFilterAlerts.bind(this)
    this.selectFilterAlerts = this.selectFilterAlerts.bind(this)
 
  }

  async componentDidMount(recalled = 0) {
    await this.preparePage();
  
    let params = await this.getParams();
    const token = localStorage.getItem("TraxainUserToken");

    if (token && token !=="null" && (params === "nothing" || !("tk" in params) || params["tk"]===null)) {
      await this.handleTokenAndParams(token,params);
    } else if (params !== "nothing") {
      await this.handleParams(params);
    } else {
      await this.handleNoTokenAndParams();
    }
  
    await this.setState({ pageFullyLoaded: true });
  }

  async preparePage() {

    await this.lookForEndpoint();
    window.onload = () => window.scrollTo(0, 0);
    this.foundImage();
  
    const { deviceType, winWidth } = await this.getDeviceInfo();
    await this.setState({ device: deviceType, winWidth });
  }
  
  async getDeviceInfo() {
    const deviceType = await this.getDeviceType();
    const winWidth = window.innerWidth;
    return { deviceType, winWidth };
  }
  
  async handleTokenAndParams(token, params) {
    await this.setState({ userToken: token });
    const response = await this.getUserRole(token);
  
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
      
    }
  
    const userData = await response.json();
    await this.setState({ currentUser: userData["user_id"], userRole: userData["role"] });
  
    if (userData["role"] !== "employee") {
      await this.handleNonEmployee(userData, params);
    } else {
      await this.handleEmployee(userData,params);
    }
  }
  
  async handleParams(params) {
    this.putFilterAlerts(true);
    await this.setState({ displayType: 'list' });
  
    let newToken = null;
    let filters = Object.keys(params["filters"]).length === 0 ? {} : JSON.parse(params["filters"]);
  
    try {
      newToken = params["tk"];
    } catch {
    }

    if (!newToken){
      newToken = this.state.userToken

    }

    if (newToken){
    localStorage.setItem("TraxainUserToken", newToken);
    this.setState({ userToken: newToken });
    
    const response = await this.getUserRole(newToken);
    if (response.status === 401){
      this.setState({errorExpirated: true, errorMsg: "Tiempo expirado. Por favor consulte con su administrador" })
    }
    else if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    const userData = await response.json();
    await this.setState({  userRole: userData["role"] });
  
    const empIdentification = parseInt(userData["empIdentification"]);


    await this.search(empIdentification, parseInt(params["start"]), parseInt(params["end"]), filters, true);
    await this.setState({ somethingSearched: 2 });
  }else{
    this.setState({ userToken: "null" });
    await this.setState({ somethingSearched: 0 });
    await this.setState({ loading: false})
  }

  }
  
  async handleNonEmployee(userData, params) {
    this.setState({ userRole: userData["role"], selectedMode: "Conventional" });
  
    if (!userData.ok && userData.type === 'cors') {
      await this.setState({ errorHappened: true, errorMsg: 'Aún no tenemos datos para ti. Contáctanos en traxain.com, escribiendo a ignacio@traxain o llamando al +34 638 26 96 33 (1)' });
    } else {
      const modes = [
        { label: "Disponible", value: "available" },
        { label: "Conducción", value: "driving" },
        { label: "Descanso", value: "resting" },
        { label: "Trabajo", value: "working" }
      ];
  
      if(params["empId"]!==0){
        await this.usersEmployeeCount(0, 0, "text", { "modes": modes })
        let empId = parseInt(params["empId"])

        await this.setState({displayType:'list'})
        this.putFilterAlerts(true)
        
        
        let newToken = null
        let filters 
        if (Object.keys(params["filters"])=== undefined || Object.keys(params["filters"]).length===0 ){
          filters={}
        }else{
          filters=JSON.parse(params["filters"])
        }

    
        await this.search(empId,parseInt(params["start"]),parseInt(params["end"]),filters, true)
        await this.setState({somethingSearched:2})
        await this.showCreationFields()

      }else{
        await this.usersEmployeeCount(0, 0, "text", { "modes": modes })
      }
    }
  }  
  
  async handleEmployee(userData, params) {
    const empIdentification = parseInt(userData["empIdentification"]);
    if (params === "nothing") {
        await this.setState({ somethingSearched: 0 });
        await this.search(empIdentification, 0, 0, {}, true);
    } else {
        await this.setState({ displayType: 'list' });

        let newToken = null;
        let filters = Object.keys(params["filters"]).length === 0 ? {} : JSON.parse(params["filters"]);

        if (params["tk"]) {
            newToken = params["tk"];
        }

        localStorage.setItem("TraxainUserToken", newToken);

        await this.search(empIdentification, parseInt(params["start"]), parseInt(params["end"]), filters, true);
        await this.setState({ somethingSearched: 2 });
    }
}  
  
  async handleNoTokenAndParams() {
  
    this.setState({ userToken: "null" });
  }
  
  async getUserRole(token) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
    };

  
    const response = await fetch(this.state.endPoint + "user-role/", requestOptions);
    return response;
  }
  
  foundImage = async () => {
  const loadImage = async (src, successCallback, errorCallback) => {
          const img = new Image();
          img.src = src;
          img.onerror = errorCallback;
          img.onload = successCallback;
      };

      const setImageState = (imgSrc, successState, errorState) => {
          loadImage(imgSrc, () => this.setState(successState), () => this.setState(errorState));
      };


      setImageState(camionesAvif, { camionesFinal: camionesMovimiento }, { camionesFinal: camionesPNG });
      setImageState(fondoAvif, { fondoFinal: fondoAvif }, { fondoFinal: fondoPNG });

  }
    
  async lookForEndpoint() {

   

    const endpointlocal = "http://localhost:8000/";
    const endpoint2 = "https://api.traxain.xyz/";
    const endpoint1 = "https://api.ecargo.link/";
    var response
     
  const requestOptions = await {
    method: "GET",
    headers: { 
    "Content-Type": "application/json",
    },
  };
  let params = await this.getParams()
    try{
            

        response = await fetch(endpointlocal + "api/users/visitaWeb", requestOptions);
        if (!response.ok) {
          throw new Error('Request failed with status ');


        }else{
          this.setState({ endPoint: endpointlocal });
        }
      // }else{
       
      //     throw new Error('Request failed with status ');

        
      // }
      }catch (err) {
        try{
      
            response = await fetch(endpoint1 + "api/users/visitaWeb", requestOptions);
            if (!response.ok) {
              throw new Error('Request failed with status ');
            }else{
              this.setState({ endPoint: endpoint1 });
            }
        }catch (err) {
          try{
            response = await fetch(endpoint2 + "api/users/visitaWeb", requestOptions);
            if (!response.ok) {
              throw new Error('Request failed with status ');
            }else{
              this.setState({ endPoint: endpoint2 });
            }
          }catch (err) {
          }
        }
      }



  }  

 
    
  async getDeviceType() {
    try {
      let ua = await navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      }
      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
      }
      return "desktop";
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al detectar el tiempo de dispositivo' })

    }
  }

  async putFilterAlerts(force=false){
    if (force){
      await this.setState({filterAlerts:true})
    }else{
      let filterAlerts = this.state.filterAlerts

    if (filterAlerts){
      await this.setState({filterAlerts:false})

      
    }else{
      await this.setState({filterAlerts:true})
      

    }
    }
    
  }

  async selectFilterAlerts(){
    if (this.selectFilterAlerts ===true){
      await this.setState({filterAlerts:true})
    }
    else if (this.selectFilterAlerts ===false){
      await this.setState({filterAlerts:true})
    }
  }

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

 


  async setEmployee(employee) {
    //await this.setState({ showTestDetails: false })
    await this.setState({ myEmployee: employee })
    //await this.setState({ showTestDetails: true })
  }

 

  async putLoading(boolValue) {
   
    
    await this.setState({ loading: boolValue })
  }

  async showNavigatorModal() {

    try {

      let showNavigatorModal = this.state.showNavigatorModal

      if (showNavigatorModal) {
        await this.setState({ showNavigatorModal: false })
      } else {
        await this.setState({ showNavigatorModal: true })
      }
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al mostrar el elemento de navegación' })

    }

  }

  async showLoginModal() {

    try {

      let showLoginModal = this.state.showLoginModalVar

      if (showLoginModal) {
        await this.setState({ showLoginModalVar: false })
      } else {
        await this.setState({ showLoginModalVar: true })

      }
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al mostrar el elemento de Login' })

    }

  }

  async showRegisterModal() {

    try {

      let showRegisterModal = this.state.showRegisterModalVar

      if (showRegisterModal) {
        await this.setState({ showRegisterModalVar: false })
      } else {
        await this.setState({ showRegisterModalVar: true })
      }
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al mostrar el elemento de registro' })

    }

  }

  

  



  


  async editActivityDetails(comments, place, mode) {
    await this.onClose()

    let modeg

    await this.setState({ somethingSearched: 0 })
    try {

      var token = this.state.userToken
      var id = parseInt(this.state.selectedActivity)
      let empId
      try{
         empId = this.state.myEmployee.id
      }catch{
        empId = this.state.selectedActivity['employee_id']
      }
      
      let start = this.state.start
      let end = this.state.end
      let filters = this.state.filters

      let modeGood
      let placeGood
      let commentsGood
      if (mode){
        modeGood = mode
      }else{
        modeGood = ""
      }
      if (place){
        placeGood = place
      }else{
        placeGood = ""
      }
      if (comments){
        commentsGood = comments
      }else{
        commentsGood = ""
      }


      let searchRequest = {
        "id": empId,
        "start": start,
        "end": end,
        "filters": filters,

      }
      let requestOptions = await {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          "id": id,
          "modeGood": modeGood,
          "comments": commentsGood,
          "place": placeGood,
          "searchRequest": searchRequest
        }),
      };

      
      await this.setState({ loading: true })
      await this.setState({ reloadEmployees: true })


      var response = await fetch(this.state.endPoint + "edit-activity-details/", requestOptions)

      if (response.type === 'cors' && !response.ok) {
        await this.setState({ errorHappened: true })
        await this.setState({ errorMsg: 'No hemos podido actualizar los detalles de esta actividad' })
        await this.setState({ loading: false })

      } else {

        let myEmployee = await response.json()

        await this.setState({ myEmployee: myEmployee })
        await this.setState({ showModalActivity: false })
        await this.setState({ showSendSmsActivity: false})
        await this.setState({ somethingSearched: 2 })
        await this.setState({ loading: false })
      }
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'No hemos podido editar esos detalles' })
      await this.setState({ loading: false })

    }
  }

 
  async showModalActivity(selectedActivity) {
    
    try {
      await this.setState({ showModalActivity: true });
      await this.setState({ selectedActivity: selectedActivity["id"] })
      await this.setState({ selectedActivityDict: selectedActivity })


      if (selectedActivity["datails"]) {
        await this.setState({ defaultComments: selectedActivity["datails"][0] })
        await this.setState({ defaultPlace: selectedActivity["datails"][1] })
        await this.setState({ defaultIdentifier: selectedActivity["datails"][2] })

      }
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error (6)' })
    }
  }


  async editPeriodsListInit(init) {
    try {
      await this.setState({ periodsListInit: init })
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error (24)' })
    }

  }

  async onCloseNav() {
    try {
      await this.setState({ showNavigatorModal: false });
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al cerrar el componente navegador' })

    }

  }

  async onCloseLog() {
    try {
      await this.setState({ showLoginModalVar: false });
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al cerrar el componente Login' })

    }

  }

  async onCloseReg() {
    try {
      await this.setState({ showRegisterModalVar: false });
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al cerrar el componente registro' })

    }

  }

  async onClose() {
    try {
      await this.setState({ showModalActivity: false });

      await this.setState({ showSendSmsActivity: false });

      await this.setState({ showPeriodModal: false });

      await this.setState({ showLastModal: false })

      await this.setState({ askTacProvider: false })

      await this.setState({ askContCred: false })

      await this.setState({ newPassAsked: false })
      await this.setState({ defaultComments: ""})
      await this.setState({ defaultPlace: ""})
      await this.setState({ defaultIdentifier: "" })

      await this.setState({ showTripModal: false })
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error (7)' })
    }
  }

  async editEmployeeListInit(init) {
    try {
      await this.setState({ listInit: init })
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error (9)' })
    }
  }

  async editActivityListInit(init) {
    try {
      await this.setState({ activityListInit: init })
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error (10)' })
    }
    // (this.state.activityListInit)
  }

  

  

  

  async getParams() {

    try {

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      let start = urlParams.get('start');
      let end = urlParams.get('end');
      let filters = urlParams.get('filters');
      let tk = urlParams.get('tk');
      let empId = urlParams.get('empId');
      if (!tk) {
        tk = null
      }
      if (!start) {
        start = 0
      }
      if (!empId) {
        empId = 0
      }
      if (!end) {
        end = 0
      }
      let noFilters
      if (!filters) {
        filters = {}
        noFilters = true

      }
      let response = {
        "start": start,
        "end": end,
        "filters": filters,
        "tk":tk,
        "empId":empId
      }



      if (start === 0 && end === 0 && noFilters) {
        return "nothing"
      } else {

        return response
      }

    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error (14)' })
    }


  }

 

  

  async errorStatus() {

    this.setState({ loading: true })

    if (this.state.errorHappened === true) {

      await this.setState({ errorHappened: false })


    } else {
      await this.setState({ errorHappened: true })

    }
    this.setState({ loading: false })
  }



  async search(empId, start, end, filters, force, displayTypeParam = "", test = false) {


    try {
      var myEmployee
      //await this.setState({ showTestDetails: false })

      if (!test){
        
        window.scrollTo(0, 0)
        await this.setState({ loading: true })
      }

      
      
      await this.setState({ somethingSearched: 0 })
      if (start === 0 && this.state.myEmployee) {

        start = new Date(this.state.myEmployee.startString)
        start = (start.getTime() / 1000)-(86400*30)
      }

      if (end === 0 && this.state.myEmployee) {
        end = new Date(this.state.myEmployee.endString)
        end = end.getTime() / 1000
      }









      var displayType

      if (displayTypeParam===""){
        displayType  = await this.state.displayType
      }else{
        displayType=displayTypeParam
      }


      let employees = this.state.employees

      let employeesSelected = await this.state.employeesSelected

      let employeesSelectedLen = await employeesSelected.length


      if (employees.length > 0 && force === false && employeesSelectedLen === 0 && 1 === 2) {



        for (var e in employees) {

          if (employees[e].id === empId) {
            myEmployee = employees[e]
            break; // If you want to break out of the loop once you've found a match
          }
        }



      } else {


        var token = this.state.userToken
        let requestOptions

        var bodyJS = JSON.stringify({
          "id": empId,
          "start": start,
          "end": end,
          "displayType": displayType,
          "filters": filters,

        })

        
        var response
        if (token !== "" && token !== null && token !== "null") {
          requestOptions = await {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token
            },
            body: bodyJS,
          };
          response = await fetch(this.state.endPoint + "employee/", requestOptions).then((response) => response.json())
          } else if (test){

          requestOptions = await {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              "id": empId,
              "start": start,
              "end": end,
              "displayType": displayType,
              "filters": filters,

            }),
          };

          
          response = await fetch(this.state.endPoint + "employeeTest/", requestOptions).then((response) => response.json())

        }
        if (!response.ok && response.type === 'cors') {
          window.location.reload()
        }
        if (response === "Employee not found") {
          window.location.reload()

        } else {
          myEmployee = await response;

          console.log(myEmployee)
          if(this.state.myEmployee !== undefined){
          if(myEmployee.id !== this.state.myEmployee.id || myEmployee.startString !== this.state.myEmployee.startString
            || myEmployee.endString !== this.state.myEmployee.endString){
            this.setState({estadosGuardados:[]})
          }
          else{
            const prevDiets = this.state.myEmployee.diets;
            const prevExtraHours = this.state.myEmployee.net_extra_hours 
            const prevEmpComplies = this.state.myEmployee.employee_complies
            if(JSON.stringify(myEmployee.diets) === '{}'){
              myEmployee.diets = prevDiets;
            }
            if(myEmployee.net_extra_hours=== 0){
              myEmployee.net_extra_hours = prevExtraHours;
            }

            if(JSON.stringify(myEmployee.employee_complies) === '{}'){
              myEmployee.employee_complies = prevEmpComplies;
            }
          //Si el id de myemployee es igual a this.state.myemployee.id entonces buscar solo las partes que han cambiado
          //Revisar diets, netextrahours y employeecomplies
        }
        } else{
          this.setState({estadosGuardados:[]})
        }

        }
      }

      await this.setState({ myEmployee: myEmployee })

      this.setState({ start: start })
      this.setState({ end: end })
      this.setState({ filters: filters })


      //}
      //await this.showCreationFields()
      await this.setState({ displayType: displayType })
      console.log("poninedo el somethingsearched")
      await setTimeout(() => this.setState({ somethingSearched: 2 }), 200)
      
      if (test){
        
        await this.setState({ loading: true })
      }
      
      await this.setState({ loading: false })

      return myEmployee
    } catch (err) {
      setTimeout(() => window.location.reload(), 2000)
    }

  }
  
  async seslectDisplayMode(displayType) {
    try {
      let prevdisplayType = this.state.displayType;
      //await this.setState({ showTestDetails: false });
      await this.setState({ showCreateTripFields: false });
      await this.setState({ showHolidays: false });
      
      let userRole = this.state.userRole;
      await this.setState({ displayType: displayType });
      //await this.setState({ userRole: "provisional " });
  
      //await this.setState({ showTestDetails: true });
      
  
      if (this.state.myEmployee) {
        let employeeId = this.state.myEmployee.id;
        let start = this.state.myEmployee.startString / 1000;
        let end = this.state.myEmployee.endString / 1000;
        let filtersDiets = { graphs: 'graphs' };
        let filters = { label: 'Semanas', value: 'weekReports' };
  
        await this.setState({ somethingSearched: 0 })
        if (!this.state.estadosGuardados.includes(displayType)) {
          this.setState(prevState => ({
            estadosGuardados: [...prevState.estadosGuardados, prevdisplayType]
          }));
  
          if (["text", "list", "trips"].includes(displayType)) {
            if (!this.state.estadosGuardados.includes("text") && !this.state.estadosGuardados.includes("list") && !this.state.estadosGuardados.includes("trips")) {

              await this.search(employeeId, start, end, filtersDiets, true);
              
            }
          }
  
          if (["periods", "dayConsult"].includes(displayType)) {
            if (!this.state.estadosGuardados.includes("periods") && !this.state.estadosGuardados.includes("dayConsult")) {
              await this.search(employeeId, start, end, filters, true);
            }
          }
        }
        
        await this.setState({ somethingSearched: 2 })
      }
      //await this.setState({ userRole: userRole });
    } catch (err) {
      await this.setState({ errorHappened: true });
      await this.setState({ errorMsg: 'Se ha producido un error (16)' });
    }
  }  

  
  

 

  async showError() {
    try {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error no especificado' })

    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un problema al mostrar un mensaje de error general' })

    }
  }



 
  render() {

    try {

      //VARIBLES DE RENDER

      var tripContent
      let content = <div></div>
      let table
      let winHeight = window.innerHeight*1.5
      var sectionStyle
      var loader = <div></div>
      var error = <div></div>
      let footerStyle
      let footer = <div></div>
      let pageFullyLoaded = this.state.pageFullyLoaded
      let spacer = <div></div>
      let employeesNow = this.state.employees
      let testSection = <div></div>
        
      if(winHeight>1500){
        winHeight = winHeight
      }else{
        winHeight = 1500
      }

      if (this.state.device === 'desktop') {
        
        if(window.innerWidth > 1200){
          sectionStyle = {width: "100%",height: "100%"};
        } else {
          sectionStyle = {width: "100%", height: "100%", backgroundImage: "url(" + this.state.fondoFinal + ")", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "bottom"};
        }

      } else {
        sectionStyle = {width: "100%", height: "1000px", backgroundImage: "url()", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "bottom"};
      }
      
      if (this.state.loading === true) {

        console.log(this.state.device)

        setTimeout(
          loader = 
            <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: 'center' }}>
              <br/><br/><br/><br/><br/>
              
              <CustomSpinner
                device={this.state.device}
              />
              <p id="loader" className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 24, color: "#18a100", animation:"infinite", willChange: "transform" }}>
                  Procesando...
              </p>
            </div>, 200);
      }

      if (this.state.errorHappened) {
        var error = 
        <ErrorHappened
          errorStatus={this.errorStatus}
          errorMsg={this.state.errorMsg}
        />
      }

      if (this.state.errorExpirated) {
        var error = 
        <ErrorExpirated
          errorStatus={this.errorStatus}
          errorMsg={this.state.errorMsg}
        />
      }

      if ((this.state.userToken === "null" || this.state.userToken === null)) {
        let JustToTesthtml = <div></div>

        if (!this.state.loading){
          JustToTesthtml = <JustToTest
                      myEmployee={this.state.myEmployee}
                      strStatus={this.state.strStatus}
                      showModalActivity={this.showModalActivity}
                      showSendSmsActivity={this.showSendSmsActivity}
                      thisDeposited={this.state.thisDeposited}
                      currentUser={this.state.currentUser}
                      search={this.search}
                      seslectDisplayMode={this.seslectDisplayMode}
                      displayType={this.state.displayType}
                      activityListInit={this.state.activityListInit}
                      editActivityListInit={this.editActivityListInit}
                      showCreationFields={this.showCreationFields}
                      userRole={this.state.userRole}
                      editTripsListInit={this.editTripsListInit}
                      tripsListInit={this.state.tripsListInit}
                      device={this.state.device}
                      showCreateTripFields={this.showCreateTripFields}
                      showHolidays={this.showHolidays}
                      showError={this.showError}
                      editPeriodsListInit={this.editPeriodsListInit}
                      periodsListInit={this.state.periodsListInit}
                      putLoading={this.putLoading}
                      activeProcessId={this.state.activeProcessId}
                      showCheckState={this.showCheckState}
                      processNumber={this.processNumber}
                      endPoint={this.state.endPoint}
                      usersEmployeeCount={this.usersEmployeeCount}
                      userToken={this.state.userToken}
                      setEmployee={this.setEmployee}      
                    />
        }
        if (this.state.device === 'desktop') {
          testSection = 
            <div id="content" className="mt-3">
              <div className="card mb-4" >
                <div className="card-body" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>
                {JustToTesthtml}
                </div>
              </div>
            </div>

          content = 
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "100%", height: "100%", backgroundImage: "url(" + this.state.camionesFinal + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top"}}>
                <br/><br/><br/><br/>
                <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '5%' }}>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '90%', textAlign: "center", fontWeight: "medium", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', }}>
                      <h1 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Bienvenido a Drive-Team.es</h1>
                      <br/>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Saca provecho a los datos de tus tacógrafos. Traxain te ayuda usando los datos legalmente válidos del tacógrafo para calcular y controlar tus gastos en personal</h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#457AF3" }}>+</h2>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Consulta el Dashboard de productividad de cada conductor</h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#457AF3" }}>+</h2>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Calcula las dietas de alimentación y pernocta</h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#457AF3" }}>+</h2>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Pronostica y calcula complementos de desplazamiento y nocturnidad</h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#457AF3" }}>+</h2>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Detecta y aclara el comportamiento inusual del conductor</h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white" }}></h2>
                      <br/><br/>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>Regístrate sin compromiso abajo para empezar a probarlo.</h4>
                      <br/>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "white", fontWeight: "medium" }}>¿No sabes por dónde empezar? Consulta <a href="https://youtu.be/y5eT_VS2xco">nuestros videotutoriales.</a> Puedes ver más información en <a href="https://traxain.com/post/drive-team">Traxain.com</a>, contactarnos en <a href="mailto:ignacio@traxain.com"> ignacio@traxain.com </a>, o llamarnos al  <a href="tel:+34638269633">+34 638 26 96 33 </a> </h4>
                      <br/>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{display: 'inline-block',background: 'white',padding: '10px',borderRadius: '5px',transition: 'transform 0.3s ease',}}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>                      
                          <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color: '#5A5A5A',fontWeight: 'medium',margin: 0, textShadow:"none"}}>
                          <i className="fas fa-arrow-down"></i> Pruébalo ahora sin necesidad de registrarte <i className="fas fa-arrow-down"></i>
                        </h4>
                      </div>                   
                      <br/>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '5%' }}>
                    </td>
                  </tr>
                </tbody>
              <br/><br/>
              </table>

              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%', backgroundColor: "#eeeff2" }}>
                <br/><br/>
                <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '17%' }}>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '66%' }}>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '17%' }}>
                    </td>
                  </tr>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '17%' }}>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '66%' }}>
                      {testSection}
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '17%' }}>
                    </td>
                  </tr>
                </tbody>
              </table>
            <br/><br/>
          </table>

          table = <div></div>
        } else {
          content =
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%', backgroundImage: 'url(' + fondoMovil + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top" }}>
                <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '5%' }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '80%', textAlign: 'center', fontWeight: 'light' }}>
                      <br />
                      <h1 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#5A5A5A', fontWeight: 'medium' }}>
                        Bienvenido a Drive-Team
                      </h1>
                      <br />
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#5A5A5A', fontWeight: 'light' }}>
                        Comprueba los datos de tu tacógrafo
                      </h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#457AF3' }}>+ </h2>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#5A5A5A', fontWeight: 'light' }}>
                        Verifica las horas extras que has realizado
                      </h4>
                      <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#457AF3' }}>+ </h2>
                      <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#5A5A5A', fontWeight: 'light' }}>
                        Calcula en base al convenio de tu provincia
                      </h4>
                      <br />
                      <br />
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{display: 'inline-block'}}>                      
                        <img src={truck} style={{width: '100%'}}/>
                      </div>                   
                      <br />
                      {/* <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: '#5A5A5A', fontWeight: 'light' }}>
                        ¿No sabes por dónde empezar? Consulta <a href="https://youtu.be/y5eT_VS2xco">nuestros videotutoriales.</a> <br></br><br></br>Puedes ver más información en <a href="https://traxain.com/post/drive-team">Traxain.com</a>, contactarnos en <a href="mailto:ignacio@traxain.com"> ignacio@traxain.com </a>, o llamarnos al  <a href="tel:+34638269633">+34 638 26 96 33 </a>
                      </h4> */}
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '5%' }}></td>
                  </tr>
                </tbody>
              </table>
              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '100%' }}>
                  <br /><br />
                  
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '10%' }}>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '80%' }}>
                    {JustToTesthtml}
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: '10%' }}>
                    </td>

                  </tr>
                </tbody>
              </table>
              <br /> 

            </table>

          
          
          table = <div></div>    
        }  
      }

      if (this.state.device === 'desktop') {
        if(window.innerHeight > 1200){
          footerStyle = {position: "fixed", bottom: 0, left: 0, right: 0};
        }    
      }
  
      if (pageFullyLoaded && !this.state.loading){
        footer = 
          <Footer 
            userToken = {this.state.userToken}
            style={footerStyle}
          />
      }    

  
      if(this.state.showModalActivity === true) {
        return (
          <div>
            <ModalActivity
              onClose={this.onClose}
              show={this.state.showModalActivity}
              showError={this.showError}
              selectedActivity={this.state.selectedActivity}
              defaultComments={this.state.defaultComments}
              defaultPlace={this.state.defaultPlace}
              defaultIdentifier={this.state.defaultIdentifier}
              editActivityDetails={this.editActivityDetails}>
              Añade los detalles
            </ModalActivity>
          </div>
        );       
      }else if(this.state.showNavigatorModal===true){
        return (
          <div>
            <NavigatorModal 
              showError = {this.showError}
              account={this.state.account} 
              device= {this.state.device}
              product={this.state.product}
              selectProduct={this.selectProduct}
              showCreationFields={this.showCreationFields}
              usersEmployeeCount={this.usersEmployeeCount}
              usersEmployeeLoad={this.usersEmployeeLoad}
              userRole={this.state.userRole}
              askNewPass={this.askNewPass}
              selectANDirecto={this.selectANDirecto}
              showANDirecto={this.state.showANDirecto}
              showNavigatorModal={this.showNavigatorModal}
              show={this.state.showNavigatorModal}
              onCloseNav={this.onCloseNav}                
            />
          </div>
        );          
      }else if(this.state.showLoginModalVar===true){        
        return (
          <div>
            <LoginModal 
              putLoading={this.putLoading}
              showError = {this.showError}
              account={this.state.account} 
              device= {this.state.device}
              product={this.state.product}
              selectProduct={this.selectProduct}
              showCreationFields={this.showCreationFields}
              usersEmployeeCount={this.usersEmployeeCount}
              usersEmployeeLoad={this.usersEmployeeLoad}
              userRole={this.state.userRole}
              askNewPass={this.askNewPass}
              selectANDirecto={this.selectANDirecto}
              showANDirecto={this.state.showANDirecto}
              showLoginModal={this.showLoginModal}
              show={this.state.showLoginModalVar}
              onCloseLog={this.onCloseLog}                
            />
          </div>
        );        
      }else if(this.state.showRegisterModalVar===true){
        return (
          <div>
            <RegisterModal 
              putLoading={this.putLoading}
              showError = {this.showError}
              account={this.state.account} 
              device= {this.state.device}
              product={this.state.product}
              selectProduct={this.selectProduct}
              showCreationFields={this.showCreationFields}
              usersEmployeeCount={this.usersEmployeeCount}
              usersEmployeeLoad={this.usersEmployeeLoad}
              userRole={this.state.userRole}
              askNewPass={this.askNewPass}
              selectANDirecto={this.selectANDirecto}
              showANDirecto={this.state.showANDirecto}
              showRegisterModal={this.showRegisterModal}
              show={this.state.showRegisterModalVar}
              onCloseReg={this.onCloseReg}                
            />
          </div>
        );        
      }else{
        
        let winWidth = this.state.winWidth
        let askIntall

        if (this.state.device==="desktop"){
          askIntall= <div></div>
        }else{
          askIntall= <div></div>
        }
      
        return (
          <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: winWidth, height: window.innerHeight > 1200 ? window.innerHeight : "auto" }}>
           {/* < PushNotification /> */}
            <Navbar
              showError={this.showError}
              account={this.state.account}
              device={this.state.device}
              product={this.state.product}
              selectProduct={this.selectProduct}
              showCreationFields={this.showCreationFields}
              usersEmployeeCount={this.usersEmployeeCount}
              usersEmployeeLoad={this.usersEmployeeLoad}
              userRole={this.state.userRole}
              askNewPass={this.askNewPass}
              selectANDirecto={this.selectANDirecto}
              showANDirecto={this.state.showANDirecto}
              showNavigatorModal={this.showNavigatorModal}
              showLoginModal={this.showLoginModal}
              showRegisterModal={this.showRegisterModal}
              winWidth={this.state.winWidth}
              winHeight={this.state.winHeight}
              volverAlPasado={this.volverAlPasado}
              regresoAlFuturo={this.regresoAlFuturo}
              stateHistory={this.state.stateHistory}
              stateFuture={this.state.stateFuture}              
            />


            <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" >              
                {error}
                {loader}
                {content}              
                {table}
                {askIntall}
            </div>
              {footer}            
          </div>
        );
      }
    }catch (err){
      this.setState({ errorHappened: true })
      this.setState({ errorMsg: 'Se ha producido un error no especificado, esta ventana se va a recargar' })
      setTimeout(() => window.location.reload(), 2000)
   }
  }
}

export default Home;