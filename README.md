# Introduction

Connector API is a general API for communication between Mews and external applications or systems. The API is typically consumed by other cloud services that work with data of hotels in Mews \(e.g. revenue management systems, cloud POS systems\). It can also be used by applications that are running on site in the hotel and mediate communication between Mews and local devices \(e.g. POS systems, printers and other physical devices, kiosks etc\).

To see scenarios where this API might be used, have a look at the [Use cases](use-cases.md) that may guide you through the implementation. Before the actual implementation, get familiar with the [Guidelines](guidelines.md) which describe how to communicate with the API. All operations and functions supported by the API are described in [Operations](operations/), [Websockets](websockets.md) and [Webhooks](webhooks.md) sections. If you are interested in changes and updates of this API, check [Changelog](changelog.md).

If you encounter any issue with the API, have a question or any other other request, please contact [integrations@mewssystems.com](mailto://integrations@mewssystems.com).

<script>
  window.intercomSettings = {
    app_id: "b8wwvmnm"
  };
</script>

<script>
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/b8wwvmnm'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/b8wwvmnm';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
