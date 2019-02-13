$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show();
	$("#DialerContent").show();
	$("#ContactList").show();
	$("#AddContact").show();
	$("#Help").show();
	$("#ContactListContent").hide();
	$("#AddContactContent").hide(); // hide other element
	$("#HelpContent").hide();
});

$("#Dialer").click(function() { // when "button_id" is clicked
	$("#DialerContent").show();
	$("#ContactListContent").hide();
	$("#AddContactContent").hide(); // hide other element
	$("#HelpContent").hide();
});

$("#ContactList").click(function() { // when "button_id" is clicked
	$("#ContactListContent").show(); // show element 
	$("#DialerContent").hide();
	$("#AddContactContent").hide(); // hide other element
	$("#HelpContent").hide();
});

$("#AddContact").click(function() { // when "button_id" is clicked
	$("#AddContactContent").show(); // show element 
	$("#ContactListContent").hide();
	$("#DialerContent").hide(); // hide other element
	$("#HelpContent").hide();
});

$("#Help").click(function() { // when "button_id" is clicked
	$("#HelpContent").show(); // show element 
	$("#ContactListContent").hide();
	$("#DialerContent").hide(); // hide other element
	$("#AddContactContent").hide();
});

/* fancy dialing functions */
$("#dialer_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
})

$("#button_dialer_clear").click(function() {
	$("#number_input").val("");
})