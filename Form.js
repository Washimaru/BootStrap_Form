import $ from "https://cdn.skypack.dev/jquery@3.6.4";
import toastr from "https://cdn.skypack.dev/toastr@2.1.4";
import moment from "https://cdn.skypack.dev/moment@2.29.4";

$(document).ready(function(){
    $("#reset-button").click(function(){
       
       $("#userNameVal").removeClass("has-error");
       $("#firstNameVal").removeClass("has-error");
       $("#lastNameVal").removeClass("has-error");
       $("#phoneNumberVal").removeClass("has-error");
       $("#faxVal").removeClass("has-error");
       $("#emailVal").removeClass("has-error");
        
       $("#myform").trigger("reset");
       toastr["success"]("Reset succesfully!"); 
    });
    $("#checkInDate, #checkOutDate, #numOfDays, #totalCost").change(function(){
      var totalAdult=parseInt(document.getElementById("adultNum").value);
      var checkInDate=moment(document.getElementById("checkInDate").value);
      var checkOutDate=moment(document.getElementById("checkOutDate").value);
      var totalDay=checkOutDate.diff(checkInDate, 'Days');
      var totalDayInt=parseInt(checkOutDate.diff(checkInDate, 'Days'));
      var costInTotal=parseInt(document.getElementById("totalCost").value);
      if (totalDay > 0){
        costInTotal=150*totalDayInt*totalAdult;
        $("#numOfDays").val(totalDayInt);
        $("#totalCost").val(costInTotal);
      }
    });
    $("#submit-button").click(function(){
      var userName=document.getElementById("userNameVal").value;
      var firstName=document.getElementById("firstNameVal").value;
      var lastName=document.getElementById("lastNameVal").value;
      var phoneNumber=document.getElementById("phoneNumberVal").value;
      var faxNumber=document.getElementById("faxVal").value;
      var emailAd=document.getElementById("emailVal").value;
      var totalAdult=parseInt(document.getElementById("adultNum").value);
      var checkInDate=moment(document.getElementById("checkInDate").value);
      var checkOutDate=moment(document.getElementById("checkOutDate").value);
      var totalDay=checkOutDate.diff(checkInDate, "Days");
      var totalCost=document.getElementById("totalCost").value;
      var isError=0;
      if(userName == null || userName==""){
          toastr["error"]("Please input username");
          $("#userNameVal").addClass('has-error');
          isError=1;
      }
      else{
          $("#userNameVal").removeClass("has-error");
      }
      if(firstName==null || firstName==""){
          toastr["error"]("Please input first name");
          $("#firstNameVal").addClass("has-error");
          isError=1;
      }
      else{
          $("#firstNameVal").removeClass("has-error");
      }
      if(lastName==null || lastName==""){
          toastr["error"]("Please input last name");
          $("#lastNameVal").addClass("has-error");
          isError=1;
      }
      else{
          $("#lastNameVal").removeClass("has-error");
      }
      if(phoneNumber==null || phoneNumber==""){
          toastr["error"]("Please input Phone Number");
          $("#phoneNumberVal").addClass("has-error");
          isError=1;
      }
      else{
          $("#phoneNumberVal").removeClass("has-error");
      }
      if(faxNumber==null || faxNumber==""){
          toastr["error"]("Please input fax number");
          $("#faxVal").addClass("has-error");
          isError=1;
      }
      else{
          $("#faxVal").removeClass("has-error");
      }
      if(emailAd==null || emailAd==""){
          toastr["error"]("Please input email");
          $("#emailVal").addClass("has-error");
          isError=1;
      }
      else{
          $("#emailVal").removeClass("has-error");
      }
      if (totalDay <= 0){
          toastr["error"]("Invalid dates");
          isError=1;
      }
      if(totalCost==null || totalCost==""){
          toastr["error"]("Cost is Empty");
          isError=1;
      }
      else if(totalCost < 0){
          toastr["error"]("Cannot have negative Cost");
          isError=1;
      }
      if(isError==0){
          $("#userNameVal").removeClass("has-error");
          $("#firstNameVal").removeClass("has-error");
          $("#lastNameVal").removeClass("has-error");
          $("#phoneNumberVal").removeClass("has-error");
          $("#faxVal").removeClass("has-error");
          $("#emailVal").removeClass("has-error");
          $("#myform").trigger("reset");
          toastr["success"]("The form has been submitted succesfully!");
      }
    });
}); 