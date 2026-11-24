/**
 * Page text for each treatment page, keyed by slug: title, metaDescription, h1, sections, keywords, faqs.
 * Only the treatment detail page imports this file, so the text stays out of the JavaScript every other page loads.
 * Names, slugs, short descriptions and schema fields stay in ./treatments.js (menus, footer, cards and schema use them).
 */
import { getTreatment } from './treatments.js';

export const treatmentContent = {
  "piles-treatment": {
    title: "Piles Treatment in Badlapur East | Piles Doctor, Thane",
    metaDescription: "Piles (bawaseer / mulvyadh) treatment in Badlapur East — medicines, procedures & surgery by a laparoscopic surgeon. Private examination. Call 080875\u00a034842.",
    h1: "Piles (Haemorrhoids) Treatment in Badlapur",
    sections: [
      {
        heading: "What are piles?",
        paragraphs: [
          "Piles are swollen blood vessels in and around the anal canal. Internal piles usually cause painless, bright-red bleeding during motion, and may slip out (prolapse) and go back in. External piles form a lump at the anal opening and can become very painful if a clot forms inside.",
          "Constipation, straining, sitting for long periods, low-fibre diet, pregnancy and heavy lifting all increase the risk."
        ]
      },
      {
        heading: "Treatment options",
        paragraphs: [
          "Early piles often settle with a high-fibre diet, 8–10 glasses of water a day, stool softeners, warm sitz baths and prescribed medicines. If bleeding or prolapse keeps returning, an office procedure or surgery may be advised.",
          "The surgeon will grade your piles on examination and explain the suitable options, the expected hospital stay and the cost before you decide."
        ]
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Recovery depends on the procedure. Most patients return to normal routine within days to a couple of weeks. Avoiding constipation is the key to preventing piles from coming back."
        ]
      }
    ],
    keywords: [
      "piles doctor Badlapur",
      "piles treatment in Badlapur",
      "mulvyadh doctor Badlapur",
      "bawaseer ka ilaj",
      "piles specialist Badlapur East"
    ],
    faqs: [
      {
        q: "Can piles be cured without surgery?",
        a: "Many early piles improve with diet changes, fluids and medicines. A procedure or surgery is advised when bleeding or prolapse keeps returning, or when piles are large."
      },
      {
        q: "Who is the piles specialist at Gurudev Hospital?",
        a: "Piles are treated by our consulting general & laparoscopic surgeon, Dr. Mayur Rupavat (MBBS, MS – General Surgery, FMAS, FIAGES). His practice focuses on laparoscopic surgery and proctology, the branch of surgery that treats piles, fissure and fistula."
      },
      {
        q: "Is blood in stool always due to piles?",
        a: "No. Bleeding can also come from a fissure, polyps or, rarely, cancer. Any rectal bleeding should be examined by a doctor, especially after age 40."
      },
      {
        q: "What is mulvyadh?",
        a: "मूळव्याध (mulvyadh) is the Marathi word for piles (haemorrhoids). In Hindi piles are called bawaseer, and \"bawaseer ka ilaj\" means piles treatment."
      }
    ]
  },
  "fissure-treatment": {
    title: "Fissure Treatment & Surgery in Badlapur East | Gurudev Hospital",
    metaDescription: "Anal fissure treatment in Badlapur East: medicines first, fissure surgery when needed. Reviewed by patients for fissure surgery. Call 080875\u00a034842.",
    h1: "Anal Fissure Treatment & Surgery in Badlapur",
    sections: [
      {
        heading: "What is an anal fissure?",
        paragraphs: [
          "A fissure is a small tear in the lining of the anus, usually caused by passing hard stool or by repeated loose motions. The tear makes the anal muscle go into spasm, which reduces blood flow and stops the tear from healing — creating a painful cycle.",
          "A fissure present for more than six weeks is called chronic and is less likely to heal with medicines alone."
        ]
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Acute fissures are treated with stool softeners, a high-fibre diet, fluids, sitz baths and medicated ointments that relax the anal muscle. Chronic fissures that do not heal may need a minor operation that relieves the muscle spasm so the tear can heal.",
          "Our surgeon will examine you gently and explain whether medicines or surgery is right for you."
        ]
      },
      {
        heading: "After surgery",
        paragraphs: [
          "Pain usually improves quickly after fissure surgery. Most patients go home after a short stay and return to routine activities within a few days, with diet advice to keep motions soft."
        ]
      }
    ],
    keywords: [
      "fissure treatment Badlapur",
      "fissure surgery Badlapur",
      "fissure doctor Badlapur East",
      "fissure operation recovery time"
    ],
    faqs: [
      {
        q: "Does every fissure need surgery?",
        a: "No. Most new fissures heal with medicines, diet and sitz baths within a few weeks. Surgery is considered for chronic fissures that do not heal."
      },
      {
        q: "How long is recovery after fissure surgery?",
        a: "Most patients return to normal routine within a few days. The surgeon will guide you based on the procedure performed."
      }
    ]
  },
  "fistula-treatment": {
    title: "Fistula Surgery in Badlapur East | Bhagandar Treatment",
    metaDescription: "Anal fistula (bhagandar) surgery in Badlapur East by a general & laparoscopic surgeon. Treatment for recurring pus & boils near the anus. Call 080875\u00a034842.",
    h1: "Anal Fistula (Bhagandar) Treatment in Badlapur",
    sections: [
      {
        heading: "What is a fistula?",
        paragraphs: [
          "A fistula is a small tunnel that forms between the inside of the anal canal and the skin near the anus, usually after a perianal abscess (a pus-filled boil). It leads to repeated discharge of pus or blood, irritation and swelling that keeps coming back."
        ]
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Antibiotics can calm an infection but do not close a fistula. Surgery is the definitive treatment. The type of operation depends on how the tract runs in relation to the anal muscles — simple fistulas and complex fistulas are treated differently to protect continence.",
          "A painful, swollen abscess needs urgent drainage — the hospital has a surgeon available 24×7."
        ]
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Wound care, sitz baths and regular follow-up are important for complete healing. Your surgeon will explain the expected healing time for your type of fistula."
        ]
      }
    ],
    keywords: [
      "fistula surgery Badlapur",
      "bhagandar operation",
      "fistula treatment Badlapur East",
      "fistula doctor near me"
    ],
    faqs: [
      {
        q: "Can a fistula heal with medicines?",
        a: "Very rarely. Medicines may control infection, but most anal fistulas need surgery to heal completely."
      },
      {
        q: "What is bhagandar?",
        a: "Bhagandar is the Hindi and Marathi term for an anal fistula."
      }
    ]
  },
  "hernia-surgery": {
    title: "Hernia Surgery & Operation in Badlapur East | Laparoscopic",
    metaDescription: "Laparoscopic & open hernia repair in Badlapur East for inguinal, umbilical & incisional hernia. General & laparoscopic surgeon, 24×7. Call 080875\u00a034842.",
    h1: "Hernia Surgery in Badlapur",
    sections: [
      {
        heading: "What is a hernia?",
        paragraphs: [
          "A hernia happens when part of the intestine or fat pushes through a weak spot in the muscle wall of the abdomen. It shows up as a bulge, often in the groin (inguinal hernia), at the navel (umbilical hernia) or at the site of an old operation scar (incisional hernia)."
        ]
      },
      {
        heading: "How is a hernia repaired?",
        paragraphs: [
          "Hernias are repaired by returning the contents to their place and strengthening the weak area, usually with a mesh. This can be done through small keyhole cuts (laparoscopic repair) or through a single cut over the hernia (open repair). Laparoscopic repair is often preferred for both-sided or recurrent hernias and generally gives less pain and faster return to work.",
          "Our general & laparoscopic surgeon will examine you and recommend the best approach for your hernia and overall health."
        ]
      },
      {
        heading: "When is a hernia an emergency?",
        paragraphs: [
          "If the bulge becomes painful, hard, red or cannot be pushed back — especially with vomiting or inability to pass gas — the hernia may be obstructed or strangulated. This needs emergency surgery. Gurudev Hospital has a surgeon on the floor 24×7."
        ]
      }
    ],
    keywords: [
      "hernia surgery Badlapur",
      "laparoscopic hernia surgery Badlapur",
      "hernia operation cost in Thane",
      "harnia operation"
    ],
    faqs: [
      {
        q: "Can a hernia be treated with medicine?",
        a: "No. Medicines or belts can relieve discomfort but cannot close the defect. Surgery is the only permanent treatment."
      },
      {
        q: "How soon can I walk after laparoscopic hernia surgery?",
        a: "Most patients walk the same day or the next day. The surgeon will guide you about lifting weights and returning to work."
      },
      {
        q: "What does hernia surgery cost?",
        a: "Cost depends on the type of hernia, the technique, mesh used and hospital stay. Call 080875\u00a034842 for an estimate after consultation; mediclaim may cover it."
      }
    ]
  },
  "gallbladder-stone-surgery": {
    title: "Gallbladder Stone Surgery in Badlapur East | Laparoscopic",
    metaDescription: "Gallbladder stone treatment in Badlapur East: laparoscopic cholecystectomy (keyhole gallbladder removal) by a FMAS, FIAGES surgeon. Call 080875\u00a034842.",
    h1: "Gallbladder Stone Surgery (Laparoscopic Cholecystectomy) in Badlapur",
    sections: [
      {
        heading: "Symptoms of gallbladder stones",
        paragraphs: [
          "Many stones cause no trouble. When they do, the typical symptom is pain in the upper right or middle of the abdomen, often after a heavy or fatty meal, sometimes spreading to the back or right shoulder, with nausea or vomiting. Fever, yellow eyes or severe pain can mean infection or a blocked bile duct and need urgent care."
        ]
      },
      {
        heading: "Laparoscopic cholecystectomy",
        paragraphs: [
          "The gallbladder is removed through a few small cuts using a camera and fine instruments. Medicines cannot reliably dissolve stones, and stones tend to come back if only the stones are removed, so removing the gallbladder is the standard treatment. You can live a normal life without a gallbladder.",
          "Our lead surgeon holds FMAS (minimal access surgery) and FIAGES (gastrointestinal endoscopic surgery) fellowships."
        ]
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Most patients start a light diet the same or next day and go home after a short stay. Light activity can be resumed within days, and the surgeon will advise when to return to heavy work."
        ]
      }
    ],
    keywords: [
      "gallbladder stone surgery Badlapur",
      "gallbladder removal surgery near me",
      "laparoscopic cholecystectomy Badlapur",
      "pittashay ki pathri operation"
    ],
    faqs: [
      {
        q: "Can gallbladder stones be removed without removing the gallbladder?",
        a: "In general no — stones usually re-form. Removing the gallbladder laparoscopically is the standard, safe treatment for stones that cause symptoms."
      },
      {
        q: "Can I live normally without a gallbladder?",
        a: "Yes. Most people digest normally. A few notice loose motions after very fatty meals for some weeks, which usually settles."
      }
    ]
  },
  "appendix-surgery": {
    title: "Appendix Operation in Badlapur East | 24×7 Appendicitis Surgery",
    metaDescription: "Appendicitis treatment & laparoscopic appendix surgery in Badlapur East with a surgeon on floor 24×7. Severe lower-right abdominal pain? Call 080875\u00a034842 now.",
    h1: "Appendix Surgery (Appendicectomy) in Badlapur — 24×7",
    sections: [
      {
        heading: "Signs of appendicitis",
        paragraphs: [
          "Pain often begins around the navel and moves to the lower right side of the abdomen over several hours. It gets worse on walking, coughing or pressing, and may come with fever, loss of appetite, nausea or vomiting. In children, elderly people and pregnant women the signs can be less typical."
        ]
      },
      {
        heading: "Treatment",
        paragraphs: [
          "The standard treatment is removal of the appendix (appendicectomy), usually by laparoscopic keyhole surgery. Delay can allow the appendix to burst, which causes a serious infection in the abdomen — so do not take painkillers and wait at home if you suspect appendicitis."
        ]
      },
      {
        heading: "Recovery",
        paragraphs: [
          "After an uncomplicated laparoscopic appendicectomy most patients walk the same day, eat within a day and go home after a short stay. Recovery takes longer if the appendix had burst."
        ]
      }
    ],
    keywords: [
      "appendix operation Badlapur",
      "appendicitis treatment Badlapur",
      "laparoscopic appendectomy Badlapur",
      "appendix operation cost in Thane"
    ],
    faqs: [
      {
        q: "Is appendix surgery an emergency?",
        a: "Acute appendicitis is usually treated urgently, ideally within hours of diagnosis, to avoid rupture."
      },
      {
        q: "Can appendix surgery be done at night?",
        a: "Yes. Gurudev Hospital is open 24 hours with a surgeon on floor 24×7."
      }
    ]
  },
  "hydrocele-surgery": {
    title: "Hydrocele Surgery in Badlapur East | Hydrocele Operation",
    metaDescription: "Hydrocele treatment & surgery (hydrocelectomy) in Badlapur East by a general surgeon. Painless scrotal swelling? Book a private consultation: 080875\u00a034842.",
    h1: "Hydrocele Surgery in Badlapur",
    sections: [
      {
        heading: "About hydrocele",
        paragraphs: [
          "In adults, a hydrocele usually develops slowly without an obvious cause; it can also follow injury or infection. It feels like a smooth, painless swelling that may become heavy. In newborn boys, a hydrocele often disappears by itself within the first year.",
          "Because a hernia or a testicular problem can look similar, every scrotal swelling should be examined by a doctor, usually with an ultrasound."
        ]
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Small hydroceles that cause no trouble can be observed. Large or uncomfortable hydroceles are treated by hydrocelectomy — a short operation through a small cut to drain the fluid and prevent it returning. Draining with a needle alone is not recommended because the fluid usually comes back."
        ]
      }
    ],
    keywords: [
      "hydrocele surgery Badlapur",
      "hydrocele operation Badlapur",
      "hydrocelectomy Badlapur",
      "hydrocele kya hota hai"
    ],
    faqs: [
      {
        q: "Is hydrocele surgery a major operation?",
        a: "No. Hydrocelectomy is a short procedure, usually with a brief hospital stay."
      },
      {
        q: "Can a hydrocele go away on its own?",
        a: "In babies, often yes. In adults it usually persists or grows, and surgery is the definitive treatment."
      }
    ]
  },
  "kidney-stone-treatment": {
    title: "Kidney Stone Doctor & Treatment in Badlapur East | Pathri",
    metaDescription: "Kidney & ureteric stone treatment in Badlapur East: pain relief, medicines and stone-removal procedures with in-patient care. Call 080875\u00a034842.",
    h1: "Kidney Stone Treatment in Badlapur",
    sections: [
      {
        heading: "Symptoms",
        paragraphs: [
          "A stone moving down from the kidney causes renal colic — severe, cramping pain in the side or back that spreads towards the groin, often with nausea, vomiting, blood in urine or burning urination. Fever with stone pain can mean an infected, blocked kidney and needs urgent treatment."
        ]
      },
      {
        heading: "Treatment options",
        paragraphs: [
          "Small stones often pass on their own with pain relief, medicines that relax the ureter, and plenty of fluids. Larger stones, stones that block urine flow, or stones causing infection or repeated pain need a procedure to break or remove them.",
          "The best procedure depends on the size, number and position of the stones. Bring your sonography or CT report and our team will explain the options available, the hospital stay and the expected cost."
        ]
      },
      {
        heading: "Preventing new stones",
        paragraphs: [
          "Drinking enough water to pass light-coloured urine, limiting excess salt, and following the diet advice based on your stone type reduce the chance of new stones."
        ]
      }
    ],
    keywords: [
      "kidney stone treatment Badlapur",
      "kidney stone doctor in Badlapur",
      "pathri ka operation",
      "mutkhada upchar"
    ],
    faqs: [
      {
        q: "Do all kidney stones need surgery?",
        a: "No. Many small stones pass with medicines and fluids. A procedure is needed for larger or obstructing stones, or when there is infection or uncontrolled pain."
      },
      {
        q: "How long is the hospital stay for a kidney stone procedure?",
        a: "It depends on the procedure and recovery. The doctor will estimate your stay after reviewing your reports."
      },
      {
        q: "What is mutkhada?",
        a: "मूतखडा (mutkhada) is the Marathi word for a kidney or urinary stone; pathri is the common Hindi word, so a kidney stone procedure is often called \"pathri ka operation\"."
      }
    ]
  },
  "fracture-treatment": {
    title: "Fracture Treatment in Badlapur East | 24×7 Accident Hospital",
    metaDescription: "Fracture & accident injury treatment in Badlapur East, open 24×7 — plaster, splints and fracture surgery. Gurudev Multi-Speciality Hospital. Call 080875\u00a034842.",
    h1: "Fracture Treatment in Badlapur — 24×7",
    sections: [
      {
        heading: "First aid before you reach",
        paragraphs: [
          "Keep the injured part still, support it with a folded newspaper, cardboard or a pillow as a splint, apply ice wrapped in cloth, and do not try to straighten a deformed limb. For an open wound with bone visible, cover it with a clean cloth and come immediately. Do not give food or drink in case surgery is needed."
        ]
      },
      {
        heading: "Treatment",
        paragraphs: [
          "After examination and X-ray, many fractures are treated by setting the bone and applying a plaster or splint. Fractures that are displaced, unstable, involve a joint or are open usually need surgery to fix the bone with plates, screws or nails.",
          "Accident patients are assessed for other injuries too; the hospital's round-the-clock surgical team can manage associated injuries."
        ]
      },
      {
        heading: "Healing",
        paragraphs: [
          "Most bones take around 6–12 weeks to heal, depending on the bone, the person's age and health. Follow-up X-rays and guided exercises help restore movement and strength."
        ]
      }
    ],
    keywords: [
      "fracture treatment Badlapur",
      "accident hospital Badlapur",
      "fracture hospital near me",
      "fracture surgery Badlapur East"
    ],
    faqs: [
      {
        q: "Do you treat fractures at night?",
        a: "Yes. The hospital is open 24 hours for accident and fracture patients."
      },
      {
        q: "How long does a fracture take to heal?",
        a: "Most fractures heal in about 6–12 weeks, but this varies with the bone, the type of fracture and the patient's age."
      }
    ]
  },
  "jaundice-hepatitis-treatment": {
    title: "Jaundice & Hepatitis A Treatment in Badlapur East",
    metaDescription: "Jaundice (kavil / piliya) & Hepatitis A treatment in Badlapur East: blood tests, admission if needed, nutrition plan. 24×7. Call 080875\u00a034842.",
    h1: "Jaundice & Hepatitis Treatment in Badlapur",
    sections: [
      {
        heading: "What causes jaundice?",
        paragraphs: [
          "Jaundice happens when bilirubin builds up in the blood. In adults the most common cause in our region is viral hepatitis — especially Hepatitis A and E, which spread through contaminated food and water, more so in the monsoon. Other causes include gallbladder stones blocking the bile duct, alcohol, some medicines and other liver diseases."
        ]
      },
      {
        heading: "Diagnosis and treatment",
        paragraphs: [
          "Blood tests (liver function tests, viral markers) and sometimes an ultrasound identify the cause and severity. Viral hepatitis usually improves with rest, fluids, nutrition and careful monitoring; patients with persistent vomiting, drowsiness, bleeding or very high bilirubin may need admission.",
          "If a stone is blocking the bile duct, our surgical team can manage it under the same roof."
        ]
      },
      {
        heading: "Diet and recovery",
        paragraphs: [
          "A balanced, easily digestible diet with adequate calories, fluids and rest supports liver recovery. Avoid alcohol and unnecessary medicines, including herbal remedies, unless your doctor approves them."
        ]
      }
    ],
    keywords: [
      "jaundice treatment Badlapur",
      "Hepatitis A treatment Badlapur",
      "kavil upchar",
      "piliya ka ilaj"
    ],
    faqs: [
      {
        q: "Is admission needed for jaundice?",
        a: "Not always. Many patients recover at home with monitoring. Admission is advised for persistent vomiting, dehydration, confusion, bleeding or very abnormal blood tests."
      },
      {
        q: "What is kavil?",
        a: "कावीळ (kavil) is the Marathi word for jaundice, and \"kavil upchar\" means jaundice treatment. Piliya is the common Hindi word."
      }
    ]
  },
  "maternity-delivery-care": {
    title: "Maternity Hospital in Badlapur East | Normal & C-Section Delivery",
    metaDescription: "Maternity care in Badlapur East: antenatal check-ups, normal delivery, C-section & postnatal care at a women-owned 24×7 hospital. Call 080875\u00a034842.",
    h1: "Maternity & Delivery Care in Badlapur",
    sections: [
      {
        heading: "During pregnancy",
        paragraphs: [
          "Regular antenatal check-ups help track your health and your baby's growth, and catch problems like anaemia, high blood pressure or diabetes in pregnancy early. Our team will guide you on tests, scans, nutrition and warning signs."
        ]
      },
      {
        heading: "Delivery",
        paragraphs: [
          "We encourage normal delivery whenever it is safe for mother and baby. When a caesarean section is medically needed, it is performed with the support of our surgical team. The hospital is open 24 hours, so labour is received at any time of the day or night."
        ]
      },
      {
        heading: "After delivery",
        paragraphs: [
          "Postnatal care covers the mother's recovery, breastfeeding support and newborn check-ups. The hospital has a nursing room for mothers and babies."
        ]
      }
    ],
    keywords: [
      "maternity hospital Badlapur",
      "normal delivery hospital Badlapur",
      "C-section delivery Badlapur",
      "delivery charges Badlapur"
    ],
    faqs: [
      {
        q: "Is the hospital open at night for delivery?",
        a: "Yes. Gurudev Multi-Speciality Hospital is open 24 hours, 7 days a week."
      },
      {
        q: "What is the cost of delivery?",
        a: "Costs depend on the type of delivery and length of stay. Please call 080875\u00a034842 for current packages and insurance options."
      }
    ]
  },
  endoscopy: {
    title: "Endoscopy in Badlapur East | Upper GI Endoscopy Test",
    metaDescription: "Upper GI endoscopy in Badlapur East for acidity, ulcers, swallowing difficulty, bleeding & anaemia. Preparation & recovery explained. Call 080875\u00a034842.",
    h1: "Endoscopy (Upper GI Endoscopy) in Badlapur",
    sections: [
      {
        heading: "What is an upper GI endoscopy?",
        paragraphs: [
          "A thin, flexible tube with a camera (endoscope) is passed gently through the mouth into the oesophagus, stomach and duodenum. The doctor watches the images on a screen and can take a tiny tissue sample (biopsy) painlessly if needed, for example to test for H. pylori infection.",
          "Endoscopy is listed among the services on the Gurudev Multi-Speciality Hospital signboard. Please call to check the endoscopy schedule and whether colonoscopy (examination of the large bowel) is also available."
        ]
      },
      {
        heading: "When is endoscopy advised?",
        paragraphs: [
          "Doctors usually recommend endoscopy for acidity or upper-abdominal pain that does not settle with medicines, difficulty or pain in swallowing, repeated vomiting, vomiting blood or passing black stools, unexplained anaemia or weight loss, and to check ulcers or other findings over time."
        ]
      },
      {
        heading: "Preparation, procedure and recovery",
        paragraphs: [
          "You will be asked not to eat or drink for about 6 to 8 hours before the test. Tell the doctor about all your medicines, especially blood thinners and diabetes medicines. The throat is numbed with a spray and some patients receive mild sedation; the examination itself usually takes only 10 to 20 minutes.",
          "Afterwards you rest for a short while until the numbness wears off, and most people go home the same day. A mild sore throat or bloating is common and passes quickly. If you were sedated, bring someone with you and do not drive that day."
        ]
      }
    ],
    keywords: [
      "endoscopy in Badlapur",
      "endoscopy test near me",
      "upper GI endoscopy Badlapur East",
      "endoscopy kaise hoti hai"
    ],
    faqs: [
      {
        q: "Is endoscopy painful?",
        a: "Most people feel only mild discomfort. The throat is numbed and sedation can be given; the test usually lasts 10 to 20 minutes."
      },
      {
        q: "Do I need to stay in hospital after endoscopy?",
        a: "Usually not. Most patients go home the same day after a short rest."
      },
      {
        q: "How do I book an endoscopy?",
        a: "Call 080875\u00a034842 to check the schedule. Bring previous reports and your list of medicines."
      }
    ]
  }
};

/** Everything a treatment page needs: the list fields plus the page text. */
export const getTreatmentPage = (slug) => {
  const item = getTreatment(slug);
  return item ? { ...item, ...treatmentContent[slug] } : undefined;
};
