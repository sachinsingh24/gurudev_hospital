/**
 * Article text for the health guides (sections + FAQs), keyed by the guide's slug in ./guides.js.
 * Section shape: { heading, paragraphs?: string[], list?: string[], table?: { headers, rows } } — paragraphs render before the list.
 */
export const guideContent = {
  "hernia-symptoms-and-treatment": {
    sections: [
      {
        heading: "What is a hernia?",
        paragraphs: [
          "A hernia happens when part of the intestine or fatty tissue pushes through a weak spot in the muscle wall of the abdomen. It usually shows as a soft swelling that gets bigger when you stand, cough or strain, and smaller, or disappears, when you lie down.",
          "Hernias do not heal on their own. They tend to grow slowly over months or years, so most are repaired with a planned operation before problems develop."
        ]
      },
      {
        heading: "Common types of hernia",
        list: [
          "Inguinal hernia: a bulge in the groin, sometimes reaching into the scrotum. It is the most common type, especially in men",
          "Umbilical hernia: a swelling at or around the navel, seen in babies and in adults, including after pregnancy",
          "Incisional hernia: a bulge through the scar of an earlier abdominal operation",
          "Femoral hernia: a swelling in the upper thigh just below the groin crease, more common in women and more likely to get trapped",
          "Epigastric hernia: a small lump in the midline between the navel and the breastbone"
        ]
      },
      {
        heading: "Symptoms",
        list: [
          "A bulge you can see or feel that comes and goes",
          "A dragging, heavy or aching feeling, often worse at the end of the day",
          "Discomfort when lifting, coughing, bending or passing stool",
          "Some hernias cause no pain at all and are noticed only as a lump"
        ]
      },
      {
        heading: "Emergency warning signs: go to hospital immediately",
        paragraphs: [
          "A hernia can become trapped (obstructed) and, if its blood supply is cut off, strangulated. This is a surgical emergency that needs an operation within hours."
        ],
        list: [
          "The bulge becomes painful, firm or tender and cannot be pushed back",
          "The skin over it turns red, purple or dark",
          "Vomiting, a swollen abdomen, or not passing gas or stool",
          "Fever with severe pain at the hernia"
        ]
      },
      {
        heading: "How is a hernia treated?",
        paragraphs: [
          "A doctor can usually diagnose a hernia by examining you while you stand and cough; an ultrasound is sometimes done to confirm it. The treatment is surgery to return the contents to their place and strengthen the weak area, usually with a mesh.",
          "The repair can be done through a small cut in the groin (open repair) or by laparoscopic keyhole surgery. Your surgeon will advise which suits you, based on the type and size of the hernia, whether it is on one or both sides, any previous operations and your general health. A hernia belt (truss) can ease discomfort for a while, but it does not cure a hernia."
        ]
      },
      {
        heading: "Recovery after hernia surgery",
        list: [
          "Most patients walk on the day of surgery and go home within a day or two",
          "Light daily activities usually resume within one to two weeks",
          "Avoid heavy lifting and strenuous exercise for as long as your surgeon advises, often four to six weeks",
          "Prevent constipation and get a long-standing cough treated, because straining puts pressure on the repair"
        ]
      }
    ],
    faqs: [
      {
        q: "Can a hernia go away without surgery?",
        a: "No. A hernia does not close on its own. A belt or lifestyle changes may ease symptoms, but only surgery repairs the weak spot."
      },
      {
        q: "Can hernia surgery be delayed?",
        a: "A small, painless groin hernia in an adult man can sometimes be watched after a surgeon's assessment, but most hernias are repaired. Femoral hernias are usually repaired soon because they are more likely to get trapped. A painful hernia that will not go back is an emergency."
      },
      {
        q: "Is laparoscopic hernia surgery better than open surgery?",
        a: "Both are standard methods. Keyhole repair may mean less pain and a quicker return to work, especially for hernias on both sides or a hernia that has come back, while open repair suits many patients well. Your surgeon will recommend the best option for you."
      }
    ]
  },
  "gallbladder-stone-symptoms": {
    sections: [
      {
        heading: "What are gallbladder stones?",
        paragraphs: [
          "The gallbladder is a small pouch under the liver that stores bile, a digestive juice. Gallstones form when substances in bile, mainly cholesterol or bile pigment, harden into stones. They range from tiny grains to stones a few centimetres across.",
          "Many people have gallstones without any symptoms. These silent stones are often found by chance on a sonography done for another reason."
        ]
      },
      {
        heading: "Typical symptoms",
        list: [
          "Pain in the upper right or upper middle abdomen, often starting after a heavy or fatty meal, or at night",
          "Pain that may spread to the back or the right shoulder blade and lasts from about half an hour to several hours",
          "Nausea or vomiting with the pain",
          "Bloating, belching and indigestion, though these are common and are not always caused by stones"
        ]
      },
      {
        heading: "Warning signs of complications",
        paragraphs: [
          "Stones can block the gallbladder or slip into the bile duct and cause serious problems. See a doctor urgently if you have:"
        ],
        list: [
          "Pain lasting more than a few hours, or pain with fever and chills (a possible gallbladder infection, called cholecystitis)",
          "Yellow eyes or skin, dark urine or pale stools (a stone may be blocking the bile duct)",
          "Severe upper abdominal pain going through to the back, with repeated vomiting (possible pancreatitis)"
        ]
      },
      {
        heading: "Tests and treatment",
        paragraphs: [
          "An abdominal ultrasound (sonography) is the main test for gallstones. Blood tests check for infection, jaundice and pancreatitis.",
          "Silent stones usually do not need treatment, though the doctor may advise surgery in some situations. For stones that cause pain or complications, the standard treatment is removing the gallbladder by keyhole surgery, called laparoscopic cholecystectomy. Medicines rarely dissolve stones and the stones tend to come back, so they are seldom used."
        ]
      },
      {
        heading: "Life after gallbladder removal",
        paragraphs: [
          "You can live a normal life without a gallbladder: bile then flows straight from the liver into the intestine. Most people return to their usual food within a few weeks. Some notice looser stools after fatty meals for a while, which usually settles.",
          "After keyhole surgery, many patients go home within a day or two and return to office work in one to two weeks, depending on their job and recovery."
        ]
      },
      {
        heading: "Diet tips if you have gallstones",
        paragraphs: [
          "Diet changes can reduce attacks, but they will not dissolve stones that are already there."
        ],
        list: [
          "Eat smaller, regular meals instead of large, heavy ones",
          "Limit fried, oily and very rich foods, which can trigger pain",
          "Include vegetables, fruit and whole grains",
          "Avoid crash diets and very rapid weight loss, which make stones more likely"
        ]
      }
    ],
    faqs: [
      {
        q: "Can gallbladder stones dissolve with home remedies?",
        a: "There is no reliable evidence that home remedies or 'stone-dissolving' drinks remove gallstones. Stones that cause pain are best assessed by a surgeon."
      },
      {
        q: "Do silent gallstones need an operation?",
        a: "Usually not. Stones that cause no symptoms are often just monitored. Your doctor may recommend surgery in certain situations and will explain why after your tests."
      },
      {
        q: "Is it safe to remove the gallbladder?",
        a: "Yes. Laparoscopic gallbladder removal is one of the most common operations, and the body digests food normally without a gallbladder."
      }
    ]
  },
  "appendix-pain-symptoms": {
    sections: [
      {
        heading: "Where is appendix pain felt?",
        paragraphs: [
          "The appendix is a small, finger-shaped pouch attached to the large intestine on the lower right side of the abdomen. When it becomes blocked and inflamed (appendicitis), the pain typically begins as a dull ache around the navel and, over the next 12 to 24 hours, moves to the lower right side of the abdomen, where it becomes sharper and more constant.",
          "The pain usually gets worse with walking, coughing, sneezing or going over bumps in a vehicle, and many people prefer to lie still with their knees bent."
        ]
      },
      {
        heading: "Other common symptoms",
        list: [
          "Loss of appetite: one of the most consistent signs",
          "Nausea or vomiting that starts after the pain begins",
          "Low-grade fever",
          "Constipation, loose motions or a feeling of needing to pass stool",
          "Tenderness when the lower right abdomen is pressed or released"
        ]
      },
      {
        heading: "Signs can be different in children, pregnancy and older adults",
        paragraphs: [
          "Young children may not describe the pain well; they may be irritable, refuse food, vomit or have a fever. In pregnancy the appendix is pushed upwards, so pain may be felt higher on the right side. Older adults may have milder pain and little fever. In all these groups appendicitis is easier to miss, so see a doctor early."
        ]
      },
      {
        heading: "What not to do at home",
        list: [
          "Do not take strong painkillers repeatedly to hide the pain before a doctor has examined you",
          "Do not take laxatives or enemas",
          "Do not apply a hot-water bag to the abdomen",
          "Avoid eating or drinking until a doctor has seen you, in case surgery is needed"
        ]
      },
      {
        heading: "When to go to hospital immediately",
        paragraphs: [
          "Go to hospital straight away if the pain keeps getting worse over a few hours, if it comes with fever and vomiting, if the abdomen becomes hard and very tender, or if severe pain suddenly eases and then returns all over the abdomen, which can mean the appendix has burst.",
          "Doctors diagnose appendicitis with an examination, blood tests and usually an ultrasound or CT scan. The standard treatment is removal of the appendix (appendicectomy), most often by laparoscopic keyhole surgery."
        ]
      }
    ],
    faqs: [
      {
        q: "Can appendix pain come and go?",
        a: "In the early stage the pain may vary, but appendicitis pain generally becomes steadier and stronger over hours. Any persistent lower-right abdominal pain should be checked by a doctor."
      },
      {
        q: "Is appendix pain on the left side?",
        a: "Usually not. The appendix lies on the right side, so left-sided pain is more often due to other causes, but only an examination can tell."
      },
      {
        q: "Can appendicitis be treated without surgery?",
        a: "In selected mild cases doctors may consider antibiotics, but surgery remains the standard treatment for most patients. The surgeon decides after examination and tests."
      }
    ]
  },
  "piles-vs-fissure-vs-fistula": {
    sections: [
      {
        heading: "Quick comparison",
        table: {
          headers: [
            "Feature",
            "Piles (mulvyadh / bawaseer)",
            "Fissure",
            "Fistula (bhagandar)"
          ],
          rows: [
            [
              "What it is",
              "Swollen blood vessels in the anal canal",
              "Small tear in the lining of the anus",
              "Tunnel between the anal canal and the skin"
            ],
            [
              "Main symptom",
              "Painless bright-red bleeding, lump",
              "Sharp, cutting pain during and after motion",
              "Repeated pus or discharge, boils"
            ],
            [
              "Pain",
              "Usually none (unless clotted)",
              "Severe, can last hours",
              "Throbbing when an abscess forms"
            ],
            [
              "Usual first treatment",
              "Diet, fluids, medicines",
              "Stool softeners, ointment, sitz bath",
              "Surgery"
            ]
          ]
        }
      },
      {
        heading: "Piles (haemorrhoids)",
        paragraphs: [
          "Piles are swollen veins in and around the anal canal. The commonest sign is bright-red blood on the stool or in the toilet without much pain. Larger piles can slip out during motion and go back in, or need to be pushed back. Constipation, straining, long sitting, pregnancy and a low-fibre diet all increase the risk."
        ]
      },
      {
        heading: "Fissure",
        paragraphs: [
          "A fissure is a tear in the delicate lining of the anus, usually after passing a hard stool. It causes a sharp, cutting or burning pain during motion that can last for minutes to hours afterwards, often with a streak of fresh blood. Many people start avoiding the toilet because of the pain, which makes constipation and the fissure worse."
        ]
      },
      {
        heading: "Fistula",
        paragraphs: [
          "A fistula usually follows an abscess (a painful, pus-filled swelling) near the anus. After the abscess bursts or is drained, a small tunnel can remain, leading to repeated discharge of pus or blood and irritation of the skin. Fistulas rarely heal on their own and generally need surgery."
        ]
      },
      {
        heading: "Home care that helps",
        list: [
          "Eat more fibre: vegetables, fruit, whole grains, dal and isabgol if advised",
          "Drink enough water through the day",
          "Do not strain, and do not sit on the toilet for long (for example with a phone)",
          "Warm-water sitz baths for 10 to 15 minutes after motion soothe pain",
          "Avoid self-treating with random ointments for weeks without a diagnosis"
        ]
      },
      {
        heading: "When to see a surgeon",
        paragraphs: [
          "See a doctor for any bleeding from the back passage, especially if you are over 40, have lost weight, have a change in bowel habit or a family history of bowel cancer, because bleeding can have other causes too. Also see a surgeon for pain that does not settle in a week or two, a lump that does not go back, or any discharge, swelling or fever near the anus."
        ]
      }
    ],
    faqs: [
      {
        q: "Can piles turn into a fistula?",
        a: "No. They are different conditions. A fistula develops from an infected gland and abscess, not from piles."
      },
      {
        q: "Do all piles need an operation?",
        a: "No. Many early piles improve with diet changes and medicines. Procedures or surgery are advised when bleeding or prolapse keeps returning."
      },
      {
        q: "Is a fissure the same as piles?",
        a: "No. A fissure is a tear that causes sharp pain; piles are swollen vessels that usually bleed without much pain. The treatments are different."
      }
    ]
  },
  "laparoscopic-vs-open-surgery": {
    sections: [
      {
        heading: "What is laparoscopic (keyhole) surgery?",
        paragraphs: [
          "In laparoscopic surgery the surgeon makes three or four small cuts, usually 5 to 10 mm long, instead of one long incision. The abdomen is gently filled with carbon dioxide gas to create space, a thin camera shows the inside on a screen, and fine instruments are used to perform the operation.",
          "Common keyhole operations include gallbladder removal for stones, hernia repair, appendix removal and diagnostic laparoscopy."
        ]
      },
      {
        heading: "Usual benefits",
        list: [
          "Less pain after the operation",
          "Smaller scars",
          "Shorter hospital stay, often one to a few days",
          "Earlier return to normal activities and work",
          "Lower risk of wound infection and wound hernia"
        ]
      },
      {
        heading: "When open surgery may be the better choice",
        paragraphs: [
          "Open surgery can be safer for some very large or complicated hernias, after several previous abdominal operations with heavy scarring, in certain emergencies, or in patients who cannot tolerate the gas used in laparoscopy. Sometimes a keyhole operation is converted to open surgery during the procedure for safety. That is a sound surgical decision, not a failure."
        ]
      },
      {
        heading: "What recovery feels like",
        paragraphs: [
          "Most patients walk on the same or next day. A temporary pain in the shoulder tip is common for a day or two because of the gas, and settles on its own. Light activity is usually possible within days, while heavy lifting is avoided for a few weeks as advised by the surgeon."
        ]
      },
      {
        heading: "What affects the cost",
        paragraphs: [
          "The cost depends on the type of operation, consumables such as mesh, anaesthesia, the length of hospital stay and any tests needed. Many mediclaim policies cover these operations. Ask for a written estimate after your consultation."
        ]
      },
      {
        heading: "Questions to ask your surgeon",
        list: [
          "Is laparoscopic surgery suitable for me, and why?",
          "How many days will I stay in hospital?",
          "When can I return to work and lift weights?",
          "What are the risks in my case?",
          "Is the operation covered by my insurance or mediclaim?"
        ]
      }
    ],
    faqs: [
      {
        q: "Is laparoscopic surgery safe?",
        a: "Yes. It is a well-established, routine technique when performed by a trained surgeon. Like any operation it has risks, which your surgeon will explain."
      },
      {
        q: "Who performs laparoscopic surgery at Gurudev Hospital?",
        a: "Dr. Mayur Rupavat, MBBS, MS (General Surgery), FMAS, FIAGES, consulting general and laparoscopic surgeon."
      }
    ]
  },
  "kidney-stone-pain-what-to-do": {
    sections: [
      {
        heading: "What kidney stone pain feels like",
        paragraphs: [
          "Kidney stones, called मूतखडा (mutkhada) in Marathi and पथरी (pathri) in Hindi, often cause no symptoms until a stone moves into the tube that carries urine to the bladder. Then it causes renal colic: sudden, severe, cramping pain in the side or back below the ribs that spreads towards the lower abdomen and groin and comes in waves. People often cannot sit or lie still."
        ],
        list: [
          "Nausea or vomiting",
          "Pink, red or brown urine",
          "Burning or frequent urge to pass urine",
          "Passing small grit or stones"
        ]
      },
      {
        heading: "Go to hospital immediately if",
        list: [
          "You have fever or chills with the pain. An infected, blocked kidney is an emergency",
          "You cannot pass urine",
          "You have only one kidney, a kidney transplant or are pregnant",
          "Vomiting stops you keeping fluids down",
          "The pain is not controlled"
        ]
      },
      {
        heading: "Will the stone pass on its own?",
        paragraphs: [
          "Many stones smaller than about 5 mm pass on their own within days to weeks, helped by pain relief, enough fluids and medicines the doctor may prescribe to relax the ureter. Larger stones, or stones that block urine flow or cause infection, usually need a procedure to break or remove them.",
          "Tests usually include a urine test, blood tests for kidney function, and an ultrasound (sonography) or CT scan to see the size and position of the stone."
        ]
      },
      {
        heading: "Preventing new stones",
        list: [
          "Drink enough water to keep your urine pale; most people need 2.5 to 3 litres of fluid a day, more in summer",
          "Reduce salt and very salty foods such as papad, pickles and packaged snacks",
          "Do not cut calcium from your diet unless your doctor advises it; normal dietary calcium actually helps",
          "Limit excess red meat and sugary soft drinks",
          "Ask your doctor whether your stone should be analysed, because diet advice depends on the stone type"
        ]
      }
    ],
    faqs: [
      {
        q: "Can home remedies dissolve kidney stones?",
        a: "Fluids help small stones pass, but home remedies cannot reliably dissolve stones. Get a scan to know the size and position before relying on home care."
      },
      {
        q: "How long does kidney stone pain last?",
        a: "Episodes can last from minutes to hours and may return until the stone passes or is removed. Severe or persistent pain should be treated in hospital."
      }
    ]
  },
  "hydrocele-symptoms-treatment": {
    sections: [
      {
        heading: "What is a hydrocele?",
        paragraphs: [
          "A hydrocele is a build-up of fluid in the thin sac that surrounds a testicle, which makes one side of the scrotum swell. It is usually painless and not dangerous, but a large hydrocele can feel heavy and uncomfortable and make walking or sitting awkward."
        ]
      },
      {
        heading: "Causes",
        list: [
          "In newborn boys: a small channel from the abdomen that has not closed yet. Many of these settle on their own by one to two years of age",
          "In adults: often no clear cause. It can also follow an injury, an infection or inflammation of the testicle, or surgery in the groin"
        ]
      },
      {
        heading: "Symptoms",
        list: [
          "Smooth, painless swelling of one or both sides of the scrotum",
          "A feeling of heaviness or dragging, especially as it grows",
          "Swelling that may be smaller in the morning and larger later in the day"
        ]
      },
      {
        heading: "Hydrocele or hernia?",
        paragraphs: [
          "A groin hernia can also cause swelling in the scrotum. A hernia often gets bigger when you cough and may go back when you lie down, whereas a hydrocele usually stays the same size. A doctor can tell them apart on examination, and a scrotal ultrasound confirms the diagnosis and checks the testicle."
        ]
      },
      {
        heading: "When to see a doctor urgently",
        paragraphs: [
          "See a doctor about any new swelling of the scrotum. Go to hospital immediately for:"
        ],
        list: [
          "Sudden, severe pain in the testicle or scrotum, especially with vomiting. This can be torsion (twisting of the testicle), which needs surgery within hours",
          "Swelling with fever, redness or tenderness, which may mean infection",
          "A hard lump in the testicle itself"
        ]
      },
      {
        heading: "Treatment and recovery",
        paragraphs: [
          "A small, painless hydrocele may simply be watched. If it is large, uncomfortable or growing, the usual treatment is a short operation called hydrocelectomy, in which the fluid is drained and the sac is treated so that fluid does not collect again. Draining the fluid with a needle alone is quick, but the fluid often comes back.",
          "Most patients go home the same day or the next day. Scrotal support, cold packs and rest help the swelling settle over a few weeks, and your surgeon will advise when you can return to work and exercise."
        ]
      }
    ],
    faqs: [
      {
        q: "Can a hydrocele go away without surgery?",
        a: "In babies it often does. In adults a hydrocele usually stays or grows slowly. Small ones can be watched, but medicines do not remove the fluid."
      },
      {
        q: "Does a hydrocele affect fertility?",
        a: "A simple hydrocele does not usually affect fertility. The surgeon examines the testicle and may advise an ultrasound to rule out other problems."
      },
      {
        q: "Is hydrocele surgery painful?",
        a: "It is done under anaesthesia, so you do not feel pain during the operation. Mild pain and swelling afterwards are controlled with medicines and scrotal support."
      }
    ]
  },
  "upper-gi-endoscopy-guide": {
    sections: [
      {
        heading: "What is an upper GI endoscopy?",
        paragraphs: [
          "In an upper GI endoscopy (also called gastroscopy or OGD), the doctor passes a thin, flexible tube with a light and camera through the mouth to look at the lining of the food pipe (oesophagus), the stomach and the first part of the small intestine (duodenum). Small tissue samples (biopsies) can be taken during the test, and some problems, such as a bleeding point, can be treated at the same time."
        ]
      },
      {
        heading: "Why it is done",
        list: [
          "Acidity or heartburn that keeps coming back despite medicines",
          "Upper abdominal pain, bloating or indigestion that does not settle",
          "Difficulty or pain in swallowing",
          "Vomiting blood, or passing black, tarry stools",
          "Unexplained anaemia or weight loss",
          "Persistent vomiting, or to check on ulcers and other known conditions"
        ]
      },
      {
        heading: "How to prepare",
        list: [
          "Do not eat for about six to eight hours before the test, and follow the exact fasting time the hospital gives you",
          "Tell the doctor about all your medicines, especially blood thinners, diabetes tablets and insulin, and about any allergies",
          "Bring your previous reports and prescriptions",
          "If you will be given sedation, come with an adult who can take you home"
        ]
      },
      {
        heading: "What happens during the test",
        paragraphs: [
          "Your throat is numbed with a spray, and a mild sedative may be given to help you relax. You lie on your left side with a mouthguard between your teeth while the doctor gently passes the scope. You can breathe normally throughout. The test usually takes about 10 to 20 minutes, and taking a biopsy is painless."
        ]
      },
      {
        heading: "After the endoscopy",
        list: [
          "Wait until the numbness in your throat wears off, usually about an hour, before eating or drinking",
          "A mild sore throat or bloating for a day is common",
          "If you were sedated, do not drive or operate machinery for the rest of the day",
          "The doctor usually explains what was seen straight away; biopsy results take a few days"
        ]
      },
      {
        heading: "When to call the hospital after the test",
        paragraphs: [
          "Serious complications such as bleeding or a tear are rare. Contact the hospital at once if you have severe chest or abdominal pain, fever, difficulty breathing, vomiting of blood or black stools after the test."
        ]
      }
    ],
    faqs: [
      {
        q: "Is endoscopy painful?",
        a: "Most people find it uncomfortable rather than painful. The throat spray and optional sedation make it easier, and the test is over in minutes."
      },
      {
        q: "Do I need to be admitted for an endoscopy?",
        a: "Usually not. A routine upper GI endoscopy is a day procedure, and most people go home the same day."
      },
      {
        q: "Does taking a biopsy mean I have cancer?",
        a: "No. Biopsies are taken routinely, for example to test for H. pylori, the infection that causes many ulcers, or to check inflammation. Most biopsy results are not cancer."
      }
    ]
  },
  "fracture-signs-first-aid": {
    sections: [
      {
        heading: "Signs that a bone may be broken",
        list: [
          "Severe pain at one spot that gets worse when you move or press it",
          "Swelling and bruising",
          "A limb that looks bent, twisted or shorter than the other side",
          "Not being able to bear weight or use the arm or leg",
          "A snap or grinding feeling at the time of the injury",
          "Bone visible through a wound (an open fracture)"
        ]
      },
      {
        heading: "Fracture or sprain?",
        paragraphs: [
          "A sprain is an injury to the ligaments around a joint, while a fracture is a break in the bone. Both cause pain and swelling, and it is often impossible to tell them apart without an X-ray. Get an X-ray if you cannot put weight on the limb, if it looks deformed, or if pain and swelling are severe or do not improve within a day or two."
        ]
      },
      {
        heading: "First aid for a suspected fracture",
        list: [
          "Keep the injured part still and support it with a pillow, a rolled towel or a simple splint",
          "Do not try to straighten a bent limb or push a bone back in",
          "Cover any wound with a clean cloth and press gently to control bleeding",
          "Apply ice wrapped in a cloth for 15 to 20 minutes to reduce swelling; never put ice directly on the skin",
          "Remove rings, bangles or anything tight near the injury before swelling starts",
          "Avoid massage, oil or home bone-setting, which can make the injury worse"
        ]
      },
      {
        heading: "Go to hospital immediately if",
        list: [
          "A bone is visible or there is a deep wound over the injury",
          "The limb below the injury is cold, pale, blue, numb or tingling",
          "There is a head, neck or back injury: do not move the person, and call for help",
          "An older person cannot stand after a fall, which may mean a hip fracture",
          "The injury happened in a road accident or a fall from a height"
        ]
      },
      {
        heading: "How fractures are treated",
        paragraphs: [
          "An X-ray confirms the fracture and shows its type. Many fractures heal in a plaster cast, slab or brace once the bones are aligned. Fractures that are displaced, unstable or enter a joint may need surgery to fix the bone with plates, screws, rods or wires. In the operation theatre, a C-arm X-ray machine helps the surgeon place them accurately.",
          "Most fractures in adults take about six to twelve weeks to heal, and longer in older people, smokers and people with diabetes or weak bones (osteoporosis). Physiotherapy afterwards helps restore strength and movement."
        ]
      }
    ],
    faqs: [
      {
        q: "Can a fracture heal without plaster?",
        a: "Some minor fractures, such as certain toe, finger or rib fractures, heal with support and rest alone. Others need a cast or surgery. The doctor decides after examining you and seeing the X-ray."
      },
      {
        q: "How do I know if a fracture needs surgery?",
        a: "Surgery is usually needed when the broken ends are displaced, the fracture is unstable or enters a joint, or the bone is broken into several pieces. The doctor explains the options after the X-ray."
      },
      {
        q: "When should physiotherapy start after a fracture?",
        a: "It depends on the fracture and the treatment. Gentle exercises for nearby joints often start early, and more active physiotherapy begins once the doctor confirms the bone is healing."
      }
    ]
  },
  "pregnancy-warning-signs-labour": {
    sections: [
      {
        heading: "Danger signs in pregnancy: go to hospital immediately",
        list: [
          "Bleeding from the vagina",
          "Severe headache, blurred vision, or sudden swelling of the face, hands or feet (possible high blood pressure, called pre-eclampsia)",
          "Severe or constant abdominal pain",
          "The baby moving less than usual, or not moving",
          "Fluid leaking from the vagina, especially before 37 weeks",
          "Fever, fits (convulsions), fainting or difficulty breathing",
          "Regular contractions or tightening before 37 weeks"
        ]
      },
      {
        heading: "Signs that labour has started",
        paragraphs: [
          "Irregular, mild tightenings that ease with rest (Braxton Hicks contractions) are common in the last weeks of pregnancy and are not true labour. Signs of true labour include:"
        ],
        list: [
          "Contractions that come at regular intervals and become longer, stronger and closer together",
          "The waters breaking: a gush or a steady trickle of fluid",
          "A 'show': sticky mucus, sometimes streaked with blood",
          "Low back pain or pressure that comes and goes with the contractions"
        ]
      },
      {
        heading: "When to leave for the hospital",
        paragraphs: [
          "For a first baby, a common guide is to come in when contractions come about every five minutes, last about a minute each and have continued like this for about an hour. Come earlier if your waters break, if you see bleeding, if the baby is moving less, if you live far from the hospital or if your doctor has advised you to. Labour is often faster in later pregnancies, so leave sooner.",
          "If you are not sure, call the hospital. It is always better to be checked and sent home than to wait too long."
        ]
      },
      {
        heading: "Regular check-ups during pregnancy",
        paragraphs: [
          "Antenatal check-ups track your blood pressure, weight, blood sugar, haemoglobin and the baby's growth, and include the recommended scans, blood tests, iron and folic acid tablets and tetanus vaccination. Attend every visit your doctor schedules, and keep all your reports in one file to bring at delivery."
        ]
      },
      {
        heading: "What to pack in your hospital bag",
        list: [
          "Your antenatal file with all reports, scans and prescriptions, and a photo ID",
          "Mediclaim or insurance details, if you have them",
          "Loose, comfortable clothes that open at the front for feeding, and sanitary pads",
          "Soft cotton clothes, a cap, socks and wrapping cloths for the baby",
          "Toiletries, slippers, a water bottle and a phone charger"
        ]
      },
      {
        heading: "Maternity care at Gurudev Hospital",
        paragraphs: [
          "Gurudev Multi-Speciality Hospital is open 24 hours for pregnancy emergencies and deliveries. The labour room has a delivery table and a newborn baby warmer, and there is a private nursing room for mothers and babies. Call 080875\u00a034842 while you are on the way so the team can be ready."
        ]
      }
    ],
    faqs: [
      {
        q: "How do I know if it is true labour or false labour?",
        a: "True labour contractions come regularly, get stronger and closer together, and do not settle with rest. False (Braxton Hicks) contractions are irregular, usually mild, and fade with rest or a change of position."
      },
      {
        q: "What should I do if my water breaks?",
        a: "Note the time and the colour of the fluid, put on a pad and come to the hospital, even if you have no contractions. Come immediately if the fluid is green or brown, or if the baby is moving less."
      },
      {
        q: "Will I have a normal delivery or a caesarean?",
        a: "Most women can plan for a normal delivery. A caesarean section is advised when it is safer for the mother or baby, and the doctor discusses this with you during check-ups and in labour."
      }
    ]
  },
  "jaundice-causes-warning-signs": {
    sections: [
      {
        heading: "What is jaundice?",
        paragraphs: [
          "Jaundice is yellowing of the eyes and skin caused by a build-up of bilirubin, a yellow pigment made when old red blood cells break down. Normally the liver clears bilirubin into the bile. Jaundice appears when the liver is inflamed or damaged, when the flow of bile is blocked, or when red cells break down too quickly. It is a sign of an underlying problem, so the cause must be found."
        ]
      },
      {
        heading: "Common causes",
        list: [
          "Viral hepatitis A and E, spread through contaminated water and food and more common in the monsoon",
          "Hepatitis B and C, spread through blood and body fluids",
          "Alcohol-related liver disease and fatty liver",
          "Certain medicines, and unprescribed herbal or 'liver tonic' preparations",
          "Gallstones or other blockages of the bile duct",
          "Faster breakdown of red blood cells (haemolysis)",
          "In newborn babies, jaundice in the first days of life is common, but it should still be checked by a doctor"
        ]
      },
      {
        heading: "Symptoms that may come with jaundice",
        list: [
          "Dark yellow urine and pale or clay-coloured stools",
          "Tiredness, loss of appetite, nausea and vomiting",
          "Itching of the skin",
          "Pain in the upper right abdomen, or fever"
        ]
      },
      {
        heading: "Danger signs: go to hospital immediately",
        list: [
          "Confusion, unusual drowsiness or a change in behaviour",
          "Bleeding from the gums or nose, or blood in vomit or stools",
          "Vomiting so much that fluids cannot be kept down",
          "High fever with chills and abdominal pain",
          "Jaundice during pregnancy",
          "Swelling of the abdomen or legs"
        ]
      },
      {
        heading: "Tests and treatment",
        paragraphs: [
          "Doctors usually advise a liver function test (including bilirubin and liver enzymes), a complete blood count, tests for the hepatitis viruses and an abdominal ultrasound to look for gallstones or a blockage. Treatment depends on the cause: most cases of hepatitis A and E improve with rest, fluids and good nutrition over a few weeks, while a blocked bile duct may need a procedure or surgery."
        ]
      },
      {
        heading: "Diet and care at home: facts and myths",
        list: [
          "Eat a normal, balanced home diet with enough calories; there is no need to stop eating or to avoid all fat",
          "Normal amounts of turmeric and other yellow foods do not make jaundice worse",
          "Drink plenty of safe, boiled or filtered water",
          "Avoid alcohol completely",
          "Do not take any medicine, including painkillers or herbal remedies, without a doctor's advice",
          "Wash hands with soap after using the toilet and before handling food, to protect your family"
        ]
      }
    ],
    faqs: [
      {
        q: "Is jaundice contagious?",
        a: "Jaundice itself is not, but some of its causes are. Hepatitis A and E spread through contaminated food and water, and hepatitis B and C through blood and body fluids."
      },
      {
        q: "How long does jaundice last?",
        a: "It depends on the cause. In hepatitis A or E, jaundice usually fades over a few weeks. Your doctor will follow your bilirubin with repeat blood tests."
      },
      {
        q: "How can jaundice be prevented?",
        a: "Drink safe water, eat freshly cooked food, wash hands well, avoid alcohol, and get vaccinated against hepatitis A and B as your doctor advises."
      }
    ]
  }
};

export const getGuideContent = (slug) => guideContent[slug];
