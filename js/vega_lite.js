// SECTION 1: WHAT ARE STUDENTS CHOOSING?

var chart1 = "charts/learning_area_popularity.vg.json";
var chart2 = "charts/learning_area_gender.vg.json";
var chart3 = "charts/language_treemap.vg.json";

vegaEmbed("#learning_area_popularity", chart1, {
  actions: false
}).catch(console.error);

vegaEmbed("#learning_area_gender", chart2, {
  actions: false
}).catch(console.error);

vegaEmbed("#language_treemap", chart3, {
  actions: false
}).catch(console.error);


// SECTION 2: HOW HAVE SUBJECT CHOICES CHANGED?

var chart4 = "charts/learning_area_trends.vg.json";
var chart5 = "charts/learning_area_comparison.vg.json";
var chart6 = "charts/gender_gap_heatmap.vg.json";
var chart7 = "charts/language_rankings.vg.json";

vegaEmbed("#learning_area_trends", chart4, {
  actions: false
}).catch(console.error);

vegaEmbed("#learning_area_comparison", chart5, {
  actions: false
}).catch(console.error);

vegaEmbed("#gender_gap_heatmap", chart6, {
  actions: false
}).catch(console.error);

vegaEmbed("#language_rankings", chart7, {
  actions: false
}).catch(console.error);


// SECTION 3: A CLOSER LOOK AT QUEENSLAND

var chart8 = "charts/queensland_popular_subjects.vg.json";
var chart9 = "charts/subject_gender_comparison.vg.json";

vegaEmbed("#queensland_popular_subjects", chart8, {
  actions: false
}).catch(console.error);

vegaEmbed("#subject_gender_comparison", chart9, {
  actions: false
}).catch(console.error);


// SECTION 4: DOES GEOGRAPHY REVEAL ANOTHER DIVIDE?

var chart10 = "charts/school_subject_locations.vg.json";
var chart11 = "charts/regional_enrolment_symbols.vg.json";
var chart12 = "charts/regional_subject_share.vg.json";

vegaEmbed("#school_subject_locations", chart10, {
  actions: false
}).catch(console.error);

vegaEmbed("#regional_enrolment_symbols", chart11, {
  actions: false
}).catch(console.error);

vegaEmbed("#regional_subject_share", chart12, {
  actions: false
}).catch(console.error);