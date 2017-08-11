function no_select() {
    alert("sss");

}



















$(document).ready(function () {

    if (msieversion()) {    // IE 

        arr_text_p = ["61001- CRM", "61002- Chemical Analysis", "61003- Fast Track", "61004- Credit Application", "61005- New Customer Set-up Form",
            "61006- Working Art Files", "61007- File Assessment", "61008- Printed Eyespot/Dieline Review",
            "61009- Die Drawing", "61010- Graphics Quote Request", "61011- Graphics Quote", "61012- Quote Item Request Forms",
            "61013- Costing Templates", "61014- Blank Quote Templates", "61015- Purchase Order", "61016- Sales Order",
            "61017- Order Review Template", "61018- Eyespot/Die Line Review Template", "61019- Graphics Checklist",
            "61020- Graphics PDF", "61021- Graphics Approval Templates", "61022- Press Approval Waiver",
            "61023- Graphics Artwork Invoice", "61024- Graphics Artwork Invoice to date",
            "61025- Item Request/MO Comment", "61026- Print Checklist", "61027- Blue Sheet",
            "61028- High Profile CO Template", "61029- CO Template", "61030- Press Approval Template"];


        arr_text = ["61002- Chemical Analysis", "61004- Credit Application", "61005- New Customer Set-up Form",
             "61008- Printed Eyespot/Dieline Review",
            "61010- Graphics Quote Request", "61011- Graphics Quote", "61012- Quote Item Request Forms",
            "61013- Costing Templates", "61014- Blank Quote Templates", "61016- Sales Order",
            "61017- Order Review Template", "61018- Eyespot/Die Line Review Template", "61019- Graphics Checklist",
            "61021- Graphics Approval Templates", "61022- Press Approval Waiver",            
            "61025- Item Request/MO Comment", "61026- Print Checklist", "61027- Blue Sheet",
            "61028- High Profile CO Template", "61029- CO Template", "61030- Press Approval Template"];

        arr_link = ["61001- CRM", "61003- Fast Track", "61006- Working Art Files","61007- File Assessment", "61009- Die Drawing",
            "61015- Purchase Order", "61020- Graphics PDF",
            "61023- Graphics Artwork Invoice", "61024- Graphics Artwork Invoice to date"];


        /* 
         
         arr_text_p = ["61001- CRM", "61002- Chemical Analysis", "61003- Fast Track", "61004- Credit Application", "61005- File Assessment",
         "61006- Die Drawing", "61007- Graphics Quote Request", "61008- Graphics Quote", "61009- Quote Item Request Forms",
         "61010- Quote Templates", "61011- Purchase Order", "61012- Sales Order", "61013- Graphics Checklist", "61014- Art Work",
         "61015- Graphics Artwork Invoice", "61016- Graphics Artwork Invoice to date",
         "61017- Item Request/MO Comment", "61018- Print Review Signoff", "61019- Blue Sheet",
         "61020- High Profile CO Template"];
         
         
         arr_text = ["61002- Chemical Analysis", "61004- Credit Application", "61005- File Assessment",
         "61007- Graphics Quote Request", "61008- Graphics Quote", "61009- Quote Item Request Forms",
         "61010- Quote Templates", "61012- Sales Order", "61013- Graphics Checklist",
         "61015- Graphics Artwork Invoice", "61016- Graphics Artwork Invoice to date",
         "61017- Item Request/MO Comment", "61018- Print Review Signoff", "61019- Blue Sheet",
         "61020- High Profile CO Template"];
         
         arr_link = ["61001- CRM", "61003- Fast Track", "61006- Die Drawing", "61011- Purchase Order",
         "61014- Art Work"];
         
         */


        /*
         arr_text = ["61002- Credit Application", "61004- Quote Item Request Forms",
         , "61005- Item Request/MO Comment",
         "61006- Print Review Signoff", "61007- Sales Order", "61008- File Assessment",
         "61009- Graphic Quote Request", "61010- Graphic Quote",
         "61012- Quote Templates", "61014- Blue Sheet", "61015- Chemical Analysis",
         "61016- Graphic Checklist"];
         
         arr_link = ["61000- CRM", "61001- Fast Track", "61003- Die Drawing"
         , "61011- Art Work", "61013- Purchase Order"];
         */
    } else {
        // new version
        
         arr_text_p = ["61001- CRM", "61002- Chemical Analysis", "61003- Fast Track", "61004- Credit Application", "61005- New Customer Set-up Form",
            "61006- Working Art Files", "61007- File Assessment", "61008- Printed Eyespot/Dieline Review",
            "61009- Die Drawing", "61010- Graphics Quote Request", "61011- Graphics Quote", "61012- Quote Item Request Forms",
            "61013- Costing Templates", "61014- Blank Quote Templates", "61015- Purchase Order", "61016- Sales Order",
            "61017- Order Review Template", "61018- Eyespot/Die Line Review Template", "61019- Graphics Checklist",
            "61020- Graphics PDF", "61021- Graphics Approval Templates", "61022- Press Approval Waiver",
            "61023- Graphics Artwork Invoice", "61024- Graphics Artwork Invoice to date",
            "61025- Item Request/MO Comment", "61026- Print Checklist", "61027- Blue Sheet",
            "61028- High Profile CO Template", "61029- CO Template", "61030- Press Approval Template"];


        arr_text = ["61002- Chemical Analysis", "61004- Credit Application", "61005- New Customer Set-up Form",
             "61008- Printed Eyespot/Dieline Review",
            "61010- Graphics Quote Request", "61011- Graphics Quote", "61012- Quote Item Request Forms",
            "61013- Costing Templates", "61014- Blank Quote Templates", "61016- Sales Order",
            "61017- Order Review Template", "61018- Eyespot/Die Line Review Template", "61019- Graphics Checklist",
            "61021- Graphics Approval Templates", "61022- Press Approval Waiver",            
            "61025- Item Request/MO Comment", "61026- Print Checklist", "61027- Blue Sheet",
            "61028- High Profile CO Template", "61029- CO Template", "61030- Press Approval Template"];

        arr_link = ["61001- CRM", "61003- Fast Track", "61006- Working Art Files","61007- File Assessment", "61009- Die Drawing",
            "61015- Purchase Order", "61020- Graphics PDF",
            "61023- Graphics Artwork Invoice", "61024- Graphics Artwork Invoice to date"];



        /* 

        arr_text_p = ["61000- CRM", "61001- Fast Track", "61002- Credit Application", "61003- Die Drawing", "61004- Quote Item Request Forms",
            "61005- Item Request/MO Comment",
            "61006- Print Review Signoff", "61007- Sales Order", "61008- File Assessment",
            "61009- Graphic Quote Request", "61010- Graphic Quote", "61011- Art Work",
            "61012- Quote Templates", "61013- Purchase Order", "61014- Blue Sheet", "61015- Chemical Analysis",
            "61016- Graphic Checklist"];

        arr_text = ["61002- Credit Application", "61004- Quote Item Request Forms",
            "61005- Item Request/MO Comment",
            "61006- Print Review Signoff", "61007- Sales Order", "61008- File Assessment",
            "61009- Graphic Quote Request", "61010- Graphic Quote",
            "61012- Quote Templates", "61014- Blue Sheet", "61015- Chemical Analysis",
            "61016- Graphic Checklist"];

        arr_link = ["61000- CRM", "61001- Fast Track", "61003- Die Drawing"
                    , "61011- Art Work", "61013- Purchase Order"];
                    
                    */


    }



});