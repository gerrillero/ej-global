ej.addCulture( "br", {
	name: "br",
	englishName: "Breton",
	nativeName: "brezhoneg",
	language: "br",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "NkN",
		negativeInfinity: "-Anfin",
		positiveInfinity: "+Anfin",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Sul","Lun","Meurzh","Merc'her","Yaou","Gwener","Sadorn"],
				namesAbbr: ["Sul","Lun","Meu.","Mer.","Yaou","Gwe.","Sad."],
				namesShort: ["Su","L","Mz","Mc","Y","G","Sa"]
			},
			months: {
				names: ["Genver","C'hwevrer","Meurzh","Ebrel","Mae","Mezheven","Gouere","Eost","Gwengolo","Here","Du","Kerzu",""],
				namesAbbr: ["Gen.","C'hwe.","Meur.","Ebr.","Mae","Mezh.","Goue.","Eost","Gwen.","Here","Du","Kzu",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});