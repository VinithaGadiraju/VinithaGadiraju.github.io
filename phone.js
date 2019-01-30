$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show();
	$("#DialerContent").show();
	$("#ContactList").show();
	$("#AddContact").show();
	$("#ContactListContent").hide();
	$("#AddContactContent").hide(); // hide other element
});

$("#Dialer").click(function() { // when "button_id" is clicked
	$("#DialerContent").show();
	$("#ContactListContent").hide();
	$("#AddContactContent").hide(); // hide other element
});

$("#ContactList").click(function() { // when "button_id" is clicked
	$("#ContactListContent").show(); // show element 
	$("#DialerContent").hide();
	$("#AddContactContent").hide(); // hide other element
});

$("#AddContact").click(function() { // when "button_id" is clicked
	$("#AddContactContent").show(); // show element 
	$("#ContactListContent").hide();
	$("#DialerContent").hide(); // hide other element
});