const oneTimePassword = (
  projectName,
  startDate,
  description,
  ministryName,
  projectGoals,
  kpi,
  endDate
) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
    table {
    border-collapse: separate;
    table-layout: fixed;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
    }
    table td {
    border-collapse: collapse
    }
    .ExternalClass {
    width: 100%
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
    line-height: 100%
    }
    body, a, li, p, h1, h2, h3 {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    }
    html {
    -webkit-text-size-adjust: none !important
    }
    body, #innerTable {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    }
    #innerTable img+div {
    display: none;
    display: none !important
    }
    img {
    Margin: 0;
    padding: 0;
    -ms-interpolation-mode: bicubic
    }
    h1, h2, h3, p, a {
    line-height: 1;
    overflow-wrap: normal;
    white-space: normal;
    word-break: break-word
    }
    a {
    text-decoration: none
    }
    h1, h2, h3, p {
    min-width: 100%!important;
    width: 100%!important;
    max-width: 100%!important;
    display: inline-block!important;
    border: 0;
    padding: 0;
    margin: 0
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important
    }
    a[href^="mailto"],
    a[href^="tel"],
    a[href^="sms"] {
    color: inherit;
    text-decoration: none
    }
    @media (min-width: 481px) {
    .hd { display: none!important }
    }
    @media (max-width: 480px) {
    .hm { display: none!important }
    }
    [style*="Fira Sans"] {font-family: 'Fira Sans', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;}
    @media only screen and (min-width: 481px) {.t16{max-width:600px!important}.t35{width:570px!important}.t55{max-width:600px!important}.t64,.t86{width:570px!important}.t96{width:601px!important}.t116,.t126,.t136,.t146,.t156,.t166,.t176,.t186,.t196,.t206,.t216,.t226,.t236,.t246,.t256,.t266,.t276,.t286{width:570px!important}}
    </style>
    <style type="text/css" media="screen and (min-width:481px)">.moz-text-html .t16{max-width:600px!important}.moz-text-html .t35{width:570px!important}.moz-text-html .t55{max-width:600px!important}.moz-text-html .t64,.moz-text-html .t86{width:570px!important}.moz-text-html .t96{width:601px!important}.moz-text-html .t116,.moz-text-html .t126,.moz-text-html .t136,.moz-text-html .t146,.moz-text-html .t156,.moz-text-html .t166,.moz-text-html .t176,.moz-text-html .t186,.moz-text-html .t196,.moz-text-html .t206,.moz-text-html .t216,.moz-text-html .t226,.moz-text-html .t236,.moz-text-html .t246,.moz-text-html .t256,.moz-text-html .t266,.moz-text-html .t276,.moz-text-html .t286{width:570px!important}</style>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <style type="text/css">
    div.t16{max-width:600px !important}td.t21{width:600px !important}td.t35{width:570px !important}div.t55{max-width:600px !important}td.t60{width:600px !important}td.t64,td.t86{width:570px !important}td.t96{width:601px !important}td.t116,td.t126,td.t136,td.t146,td.t156,td.t166,td.t176,td.t186,td.t196,td.t206,td.t216,td.t226,td.t236,td.t246,td.t256,td.t266,td.t276,td.t286{width:570px !important}
    </style>
    <![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    <body class="t0" style="min-width:100%;Margin:0px;padding:0px;background-color:#F0F0F0;"><div class="t1" style="background-color:#F0F0F0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t294" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F0F0F0;" valign="top" align="center">
    <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color="#F0F0F0"/>
    </v:background>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td>
    <table class="t44" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t45" style="background-color:#CDD6BC;">
    <!--<![endif]-->
    <!--[if mso]><td class="t45" style="background-color:#CDD6BC;"><![endif]-->
    <div class="t51" style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
    <!--[if mso]>
    <table role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top" width="600"><tr><td width="600" valign="top"><![endif]-->
    <div class="t55" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:480px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t57"><tr>
    <td class="t58"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td><div class="t103" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t105" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t106" style="width:148px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t106" style="width:148px;"><![endif]-->
    <div style="font-size:0px;"><img class="t112" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="148" height="125.796875" alt="" src="https://uploads.tabular.email/e/ba0ee454-0828-4c08-aa48-4582d8e4f797/8fcbb6ec-554b-4c56-854d-7f3a1c6d55c5.png"/></div></td>
    </tr></table>
    </td></tr><tr><td><div class="t93" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t95" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t96" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t96" style="width:480px;"><![endif]-->
    <h1 class="t102" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:52px;font-weight:700;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:7px;">PROJECT STARTED</h1></td>
    </tr></table>
    </td></tr><tr><td><div class="t94" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t85" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t86" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t86" style="width:480px;"><![endif]-->
    <p class="t92" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:4px;">This is to announce the successful submission of a new project on the MPMS platform.Below are the details:</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t84" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t125" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t126" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t126" style="width:480px;"><![endif]-->
    <p class="t132" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">PROJECT DETAILS: </p></td>
    </tr></table>
    </td></tr><tr><td><div class="t124" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t225" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t226" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t226" style="width:480px;"><![endif]-->
    <p class="t232" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">MINISTRY NAME</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t224" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t135" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t136" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t136" style="width:480px;"><![endif]-->
    <p class="t142" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${ministryName}</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t134" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t235" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t236" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t236" style="width:480px;"><![endif]-->
    <p class="t242" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">PROJECT NAME</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t234" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t145" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t146" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t146" style="width:480px;"><![endif]-->
    <p class="t152" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${projectName}</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t144" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t245" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t246" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t246" style="width:480px;"><![endif]-->
    <p class="t252" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">DESCRIPTION</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t244" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t155" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t156" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t156" style="width:480px;"><![endif]-->
    <p class="t162" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${description} </p></td>
    </tr></table>
    </td></tr><tr><td><div class="t154" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t255" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t256" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t256" style="width:480px;"><![endif]-->
    <p class="t262" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">GOALS and OBJECTIVES</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t254" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t165" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t166" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t166" style="width:480px;"><![endif]-->
    <p class="t172" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${projectGoals} </p></td>
    </tr></table>
    </td></tr><tr><td><div class="t164" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t265" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t266" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t266" style="width:480px;"><![endif]-->
    <p class="t272" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"><span class="t293" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">KEY PERFORMANCE INDICATORS (KPIs</span>)</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t264" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t175" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t176" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t176" style="width:480px;"><![endif]-->
    <p class="t182" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${kpi}</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t174" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t275" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t276" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t276" style="width:480px;"><![endif]-->
    <p class="t282" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">PROJECT START DATE</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t274" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t185" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t186" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t186" style="width:480px;"><![endif]-->
    <p class="t192" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${startDate}</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t184" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t285" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t286" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t286" style="width:480px;"><![endif]-->
    <p class="t292" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:700;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">PROJECT END DATE</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t284" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t195" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t196" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t196" style="width:480px;"><![endif]-->
    <p class="t202" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">${endDate}</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t194" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t115" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t116" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t116" style="width:480px;"><![endif]-->
    <p class="t122" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">This is to ensure the successful execution of this Project while meeting the specified  deadlines. Details will be communicated regularly to provide real-time insights into the  progress of this crucial phase.</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t71" style="mso-line-height-rule:exactly;mso-line-height-alt:33px;line-height:33px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    
    </td></tr><tr><td><div class="t72" style="mso-line-height-rule:exactly;mso-line-height-alt:21px;line-height:21px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t215" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t216" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t216" style="width:480px;"><![endif]-->
    <p class="t222" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">Best Regards,</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t214" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t205" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t206" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t206" style="width:480px;"><![endif]-->
    <p class="t212" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:30px;font-weight:500;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">MPMS Platform.</p></td>
    </tr></table>
</td></tr><tr><td><div class="t204" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>

</td></tr><tr><td><div class="t62" style="mso-line-height-rule:exactly;mso-line-height-alt:59px;line-height:59px;font-size:1px;display:block;">&nbsp;</div></td></tr></table></td>
</tr></table>
</div>
<!--[if mso]>
</td>
</tr></table>
<![endif]-->
</div></td>
</tr></table>
</td></tr><tr><td><div class="t12" style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top" width="600"><tr><td width="600" valign="top"><![endif]-->
<div class="t16" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:480px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t18"><tr>
<td class="t19" style="padding:0 0 11px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td><div class="t32" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
<!--[if !mso]><!--><td class="t35" style="width:480px;">
<!--<![endif]-->
<!--[if mso]><td class="t35" style="width:480px;"><![endif]-->
<p class="t41" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Policy and Coordination Office (PCo)</p></td>
</tr></table>
</td></tr><tr><td><div class="t33" style="mso-line-height-rule:exactly;mso-line-height-alt:9px;line-height:9px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
<!--[if !mso]><!--><td class="t25" style="width:350px;">
<!--<![endif]-->
<!--[if mso]><td class="t25" style="width:350px;"><![endif]-->
<p class="t31" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Copyright (c) 2023 MPMS Platform. All rights Reserved</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</div>
<!--[if mso]>
</td>
</tr></table>
<![endif]-->
</div></td></tr></table></td></tr></table></div></body>
</html>
  `;
};

module.exports = oneTimePassword;
