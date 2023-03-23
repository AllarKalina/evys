import { Tab } from "@headlessui/react";
import { Fragment } from "react";

const VeterinaryTab = () => {
  const tabs = [
    {
      name: "Design",
      features: [
        {
          name: "Adaptive and modular",
          description: `Kolmandal aastal algavad esimesed kliinilised ained ning saame õpitud
      oskusi ka päris loomade peal harjutada. Nii sügis- kui ka kevadsemestril
      õpime kliinilis-laboratoorse diagnostika kursuse käigus veistel, hobustel,
      koertel ja kassidel kliinilist ülevaatust läbi viima. Seemendus- ja
      sigimisõpetuse raames saame kooli õppelauda lehmade peal kunstlikku
      seemendamist harjutada. Farmakoloogias õpime erinevate ravimite
      toimeaineid ja nende mõju organismile.`,
        },
      ],
    },
    {
      name: "Material",
      features: [
        {
          name: "Natural wood options",
          description: `Kolmanda aasta kevadel algavad ka sellised põnevad ained nagu
      lahanguõpetus, kirurgia ja anestesioloogia. Parasitoloogia kursusel saab
      aimu nii loomi kui inimesi kimbutavatest sise- ja välisparasiitidest ning
      loomade infektsioonhaigustes õpime kõikvõimalike bakterite ja viiruste
      poolt põhjustatud haiguseid. Lisaks õpime endokrinoloogias ka organismi
      enda hormoonide mõju ning nende kõrvalekalletest tingitud haiguseid.`,
        },
      ],
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Tab.Group as="div" className="mt-4">
      <div className="-mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
          <Tab.List className="-mb-px flex space-x-10">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 py-4 text-sm font-medium"
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>
      <Tab.Panels as={Fragment}>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name} className="space-y-16">
            {tab.features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse pt-6 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-12 lg:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default VeterinaryTab;
