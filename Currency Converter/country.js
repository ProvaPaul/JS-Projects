const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  //web.js er part
  let url="https://latest.currency-api.pages.dev/v1/currencies";
// let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";

  let selects=document.querySelectorAll(".container select");
  let from=document.querySelector(".from1");
  let to=document.querySelector(".to1");

  let btn=document.querySelector("#button");

  for(let select of selects){
    for(country_code in countryList){
        console.log(country_code,countryList[country_code]);
        let option=document.createElement("option");
        option.innerText=country_code;
        option.value=country_code;
        if(select.name=="From" && country_code==="BDT"){
                option.selected="selected";
        }else if(select.name==="To" && country_code==="INR"){
            option.selected="selected";
        }
        select.append(option);
    }
    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    });
  }

  const updateFlag=(element)=>{
            // console.log(element.value);
            let country_code=element.value;
            let country=countryList[country_code];
            console.log(country);
            let newsrc=`https://flagsapi.com/${country}/flat/64.png`;
            console.log(newsrc);
            let img=element.parentElement.querySelector("img");
            img.src=newsrc;

  }


  //for set currency
    btn.addEventListener(("click"),async (event)=>{
    event.preventDefault();

    let amount=document.querySelector(".input");
    if(amount.value==""|| amount.value<0){
               amount.value="1";
    }

    console.log(amount.value);
    console.log(from.value,to.value);
    
    let newUrl=`${url}/${from.value.toLowerCase()}.json`;
    let response=await fetch(newUrl);
    console.log(response);
    let data=await response.json();
    let rate = data[from.value.toLowerCase()][to.value.toLowerCase()];

    console.log(rate);
    let finalamount = (amount.value)*rate;
    console.log(finalamount);


    let para=document.querySelector(".para");
    para.innerText=`${amount.value} ${from.value} =${finalamount} ${to.value}`;


});

