function no_select() {
    alert("sss");

}



















$(document).ready(function () {

    if (msieversion()) {    // IE 

        arr_text_p = ["61001- CRM", "61002- Credit Application", "61003- New Customer Set-up Form", "61004- Working Art Files", "61005- Die Drawing",
            "61006- File Assessment", "61007- Chemical Analysis", "61008- Fast Track", "61009- R & D Print Review",
            "61010- Costing Review", "61011- Quote Item Request Forms",
            "61012- Graphics Quote Request", "61013- Graphics Quote", "61014- Costing Templates",
            "61015- Blank Quote Templates", "61016- Sample Order Verification",
            "61017- Purchase Order", "61018- Sales Order", "61019- Credit Order Review (email) Template", "61020- Printed Eyespot/Dieline Review",
            "61021- Eyespot/Die Line Review (email) Template", "61022- Graphic Checklist", "61023- Ink Draw Down", "61024- Graphics PDF",
            "61025- Graphics Approval Templates", "61026- Press Approval Waiver Or Approval", "61027- Graphics Artwork Invoice",
            "61028- Graphics Artwork Invoice to date", "61029- Item Request/MO Comment", "61030- R & D Print Checklist Review",
            "61031- Blue Sheet", "61032- High Profile CO (email) Template", "61033- CO Template", "61034- Press Approval Template"

        ];


        arr_text = ["61002- Credit Application", "61003- New Customer Set-up Form", "61007- Chemical Analysis", "61011- Quote Item Request Forms",
            "61012- Graphics Quote Request", "61013- Graphics Quote", "61014- Costing Templates",
            "61015- Blank Quote Templates", "61018- Sales Order", "61019- Credit Order Review (email) Template",
            "61020- Printed Eyespot/Dieline Review", "61021- Eyespot/Die Line Review (email) Template", "61022- Graphic Checklist",
            "61023- Ink Draw Down", "61025- Graphics Approval Templates", "61026- Press Approval Waiver Or Approval",
            "61029- Item Request/MO Comment", "61031- Blue Sheet",
            "61032- High Profile CO (email) Template", "61033- CO Template", "61034- Press Approval Template"

        ];

        arr_link = ["61001- CRM", "61004- Working Art Files", "61005- Die Drawing", "61006- File Assessment", "61008- Fast Track",
            "61009- R & D Print Review", "61010- Costing Review",
            "61016- Sample Order Verification", "61017- Purchase Order", "61024- Graphics PDF",
            "61027- Graphics Artwork Invoice", "61028- Graphics Artwork Invoice to date", "61030- R & D Print Checklist Review",
            "61024- Graphics Artwork Invoice to date"];


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

        arr_text_p = ["61001- CRM", "61002- Credit Application", "61003- New Customer Set-up Form", "61004- Working Art Files", "61005- Die Drawing",
            "61006- File Assessment", "61007- Chemical Analysis", "61008- Fast Track", "61009- R & D Print Review",
            "61010- Costing Review", "61011- Quote Item Request Forms",
            "61012- Graphics Quote Request", "61013- Graphics Quote", "61014- Costing Templates",
            "61015- Blank Quote Templates", "61016- Sample Order Verification",
            "61017- Purchase Order", "61018- Sales Order", "61019- Credit Order Review (email) Template", "61020- Printed Eyespot/Dieline Review",
            "61021- Eyespot/Die Line Review (email) Template", "61022- Graphic Checklist", "61023- Ink Draw Down", "61024- Graphics PDF",
            "61025- Graphics Approval Templates", "61026- Press Approval Waiver Or Approval", "61027- Graphics Artwork Invoice",
            "61028- Graphics Artwork Invoice to date", "61029- Item Request/MO Comment", "61030- R & D Print Checklist Review",
            "61031- Blue Sheet", "61032- High Profile CO (email) Template", "61033- CO Template", "61034- Press Approval Template"

        ];


        arr_text = ["61002- Credit Application", "61003- New Customer Set-up Form", "61007- Chemical Analysis", "61011- Quote Item Request Forms",
            "61012- Graphics Quote Request", "61013- Graphics Quote", "61014- Costing Templates",
            "61015- Blank Quote Templates", "61018- Sales Order", "61019- Credit Order Review (email) Template",
            "61020- Printed Eyespot/Dieline Review", "61021- Eyespot/Die Line Review (email) Template", "61022- Graphic Checklist",
            "61023- Ink Draw Down", "61025- Graphics Approval Templates", "61026- Press Approval Waiver Or Approval",
            "61029- Item Request/MO Comment", "61031- Blue Sheet",
            "61032- High Profile CO (email) Template", "61033- CO Template", "61034- Press Approval Template"

        ];

        arr_link = ["61001- CRM", "61004- Working Art Files", "61005- Die Drawing", "61006- File Assessment", "61008- Fast Track",
            "61009- R & D Print Review", "61010- Costing Review",
            "61016- Sample Order Verification", "61017- Purchase Order", "61024- Graphics PDF",
            "61027- Graphics Artwork Invoice", "61028- Graphics Artwork Invoice to date", "61030- R & D Print Checklist Review",
            "61024- Graphics Artwork Invoice to date"];



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