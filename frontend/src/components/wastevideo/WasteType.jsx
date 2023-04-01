import React, { useEffect } from "react";
import axios from "axios";

const WasteType = (props) => {
  const mostMatched = props.data[0];
  const allLabels = props.data;
  // const sortedLabels = allLabels.map((elem) => elem.label).sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    sendWaste();
  }, []);

  const sendWaste = async () => {
    const wasteType = mostMatched.label;
    const accuracy = mostMatched.confidence;
    await axios
      .post("http://localhost:8000/api/prediction/", {
        wasteType: wasteType,
        accuracy: accuracy
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <ul className="wastetype waste-elem">
        {allLabels.map((props) => (
          <li key={props.index}>
            <span>
              <img
                className={`img ${props.label === mostMatched.label ? "selected" : null
                  }`}
                src={
                  props.label === "No Dolls"
                    ? "./images/No.jpg"
                    : `./images/${props.label}.jpg`
                }
                alt={props.label}
              />
              <p className="name">{props.label}<br />{((props.confidence) * 100).toFixed(3)}%</p>
            </span>
          </li>
        ))}
      </ul>
      {mostMatched.label === 'plastic' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">Plastic, Non-biodegradable</h1>
          <p className="list-disc list-inside">
            <li>Reduce single-use plastics: Single-use plastics, such as straws, water bottles, and plastic bags, contribute to a significant amount of plastic waste. Reducing or eliminating their use is an effective way to reduce plastic waste.</li>
            <li>Use reusable items: Using reusable items, such as water bottles, coffee cups, and shopping bags, can significantly reduce plastic waste.</li>
            <li>Choose products with less packaging: Choose products with minimal packaging or packaging made from sustainable materials like paper, glass, or metal.</li>
            <li>Recycle properly: Properly recycling plastic is important to keep it out of landfills and the environment. Check local recycling guidelines to determine which types of plastic can be recycled in your area.</li>
            <li>Support legislation: Supporting legislation and policies that reduce plastic waste, such as plastic bag bans or restrictions on single-use plastics, can have a significant impact.</li>
            <li>Opt for eco-friendly alternatives: Opt for eco-friendly alternatives to plastic products, such as bamboo toothbrushes, metal straws, and cloth shopping bags.</li>
          </p>
          <p>By implementing these tips, we can reduce plastic waste, conserve natural resources, and promote a more sustainable future.</p>
        </div>
      }
      {mostMatched.label === 'clothes' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">Clothes</h1>
          <p className="list-disc list-inside">
            <li>Buy secondhand or vintage clothing: Purchasing secondhand clothing can help reduce demand for new clothing, which in turn reduces the amount of clothing waste generated.</li>
            <li>Repair and mend clothes: Instead of throwing out clothes with minor tears or damage, consider repairing them. This not only reduces waste but also extends the life of your clothing.</li>
            <li>Donate or sell unwanted clothes: Instead of throwing away clothes that no longer fit or that you no longer wear, donate them to a local charity or sell them to a secondhand store.</li>
            <li>Choose quality over quantity: Invest in high-quality clothing that will last longer, instead of buying cheap, disposable clothing that will quickly wear out.</li>
            <li>Practice sustainable laundry habits: Use cold water when washing clothes, air-dry clothes instead of using a dryer, and avoid using harsh chemicals or detergents that can damage clothing and reduce its lifespan.</li>
          </p>
          <p>By following these tips, we can reduce the amount of clothing waste generated and promote a more sustainable and responsible approach to fashion.</p>
        </div>
      }
      {mostMatched.label === 'glass' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">Glass, Non Biodegradable</h1>
          <p>Reducing glass waste is an important aspect of waste reduction and environmental sustainability. Here are some key points to consider:</p>
          <ul>
            <li><p>Reuse: Glass containers, such as bottles and jars, can be reused for storage or repurposed for crafts or decorations.</p></li>
            <li><p>Recycling: Glass is infinitely recyclable, so recycling glass products is an effective way to reduce glass waste.</p></li>
            <li><p>Buy products with minimal packaging: Choose products with minimal packaging or packaging made from sustainable materials like paper, glass, or metal.</p></li>
            <li><p>Support recycling programs: Support recycling programs in your community, and make sure to recycle glass products properly.</p></li>
            <li><p>Donate: Donate unwanted glass products, such as dishes or vases, to local charities or thrift stores.</p></li>
            <li><p>Buy products made from recycled glass: Buying products made from recycled glass helps to support the recycling industry and reduce the need for virgin glass production.</p></li>
          </ul>
          <p>By implementing these tips, we can reduce the amount of glass waste we generate and promote a more sustainable future.</p>
        </div>
      }

      {
        mostMatched.label === 'e-waste' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">E-waste, Non Biodegradable</h1>
          <p>Electronic waste, or e-waste, is a growing problem worldwide. To reduce and control e-waste, here are some ways:</p>
          <ul>
            <li>Buy electronics with longevity in mind: Consider investing in durable and long-lasting electronics, rather than opting for cheaper, disposable models that will need to be replaced frequently.</li>
            <li>Donate or sell old electronics: If you have electronics that are still in good condition but that you no longer need, consider donating or selling them to someone else who can use them.</li>
            <li>Recycle e-waste: Recycling e-waste is essential to prevent toxic chemicals from harming the environment. Look for certified e-waste recyclers who will dispose of electronics in an environmentally responsible manner.</li>
            <li>Buy refurbished electronics: Purchasing refurbished electronics is a sustainable option, as it reduces the demand for new electronics and extends the lifespan of existing ones.</li>
            <li>Properly dispose of batteries: Batteries contain toxic chemicals and should be disposed of properly. Look for designated battery recycling locations or participate in battery recycling programs.</li>
            <li>Use cloud storage: Storing data on the cloud reduces the need for physical storage devices like hard drives, which can become obsolete and contribute to e-waste.</li>
          </ul>
          <p>By following these tips, we can help reduce the amount of e-waste generated and promote more sustainable practices when it comes to electronics.</p>
        </div>
      }
      {
        mostMatched.label === 'metal' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">Metals, Non Biodegradable</h1>
          <p>Metal is a growing problem worldwide. To reduce and control e-waste, here are some ways:</p>
          <ul>
            <li><p>Metals are valuable resources that can be recycled indefinitely without losing their properties or quality.</p></li>
            <li><p>Recycling metal reduces the need for mining and extraction, which can be environmentally damaging and resource-intensive.</p></li>
            <li><p>Commonly recycled metals include steel, aluminum, copper, and brass, which are used in a variety of products, from cars and appliances to building materials and packaging.</p></li>
            <li><p>The metal recycling process involves collection, sorting, cleaning, and melting down the metal to create new products.</p></li>
            <li><p>Recycling metal requires less energy and resources than extracting and refining new metal, which results in significant energy and cost savings.</p></li>
            <li><p>Metal recycling also helps reduce greenhouse gas emissions, as the process produces fewer emissions than the production of new metal.</p></li>
          </ul>
          <p style={{ textIndent: '30px' }}>By recycling metal, we can reduce waste, conserve natural resources, and promote a more sustainable future.</p>
        </div>
      }
      {
        mostMatched.label === 'paper' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">Paper Waste, Biodegradable</h1>
          <p>Paper has been a problem since ages. To reduce and control e-waste, here are some ways:</p>
          <ul>
            <li>Use digital communication methods like email, online messaging, and video conferencing</li>
            <li>Print on both sides of the paper to cut usage in half</li>
            <li>Print only what is necessary and essential</li>
            <li>Use recycled paper to reduce the need for virgin pulp</li>
            <li>Go paperless by switching to digital billing, e-statements, and online payment systems</li>
            <li>Reuse paper that has only been printed on one side as scrap paper or for draft printing</li>
          </ul>
          <p>By implementing these tips, we can reduce the amount of paper we use and promote a more sustainable future.</p>
        </div>
      }
      {
        mostMatched.label === 'biomedical' && (
          <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
            <h1 className="text-4xl text-center font-semibold">Biomedical Waste, Non Biodegradable</h1>
            <p>Reducing glass waste is an important aspect of waste reduction and environmental sustainability. Here are some key points to consider:</p>
            <ul>
              <li>Segregation: Biomedical waste must be segregated at the point of generation to ensure that different types of waste are properly managed.</li>
              <li>Transportation: Biomedical waste must be transported safely and securely to avoid spills and contamination.</li>
              <li>Treatment: Biomedical waste must be treated to eliminate any potential hazards before disposal. Common treatment methods include incineration, autoclaving, and chemical disinfection.</li>
              <li>Disposal: Biomedical waste must be disposed of safely to prevent harm to human health and the environment. This can be done through landfilling or other methods such as high-temperature incineration or plasma arc treatment.</li>
              <li>Education: Staff must be educated and trained in the proper procedures for the management of biomedical waste, including segregation, transportation, and treatment.</li>
              <li>Compliance: Biomedical waste management must comply with relevant regulations and guidelines to ensure safety and minimize environmental impact.</li>
            </ul>
            <p>By implementing these tips, we can reduce the amount of glass waste we generate and promote a more sustainable future.</p>
          </div>)
      }
      {
        mostMatched.label === 'light bulbs' &&
        <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
          <h1 className="text-4xl text-center font-semibold">Light Bulbs, Non Biodegradable</h1>
          <p>Recycling light bulbs is an important aspect of waste reduction and environmental sustainability. Here are some key points to consider:</p>
          <ul>
            <li>Compact fluorescent lamps (CFLs) and light-emitting diode (LED) bulbs contain toxic substances such as mercury and lead, which can pose a risk to the environment if not disposed of properly.</li>
            <li>It is important to recycle these bulbs to prevent toxic substances from contaminating the environment and to recover valuable materials that can be reused.</li>
            <li>Many cities and towns offer recycling programs for CFLs and LEDs, so it is important to check with local authorities to determine the proper way to dispose of these bulbs.</li>
            <li>Recycling methods for light bulbs include sending them to specialized recycling centers, returning them to the manufacturer, or dropping them off at designated collection points.</li>
            <li>It is important to handle broken light bulbs with care, as the release of mercury can pose a health risk. Broken CFLs and LEDs should be placed in a sealed container and taken to a designated collection point for safe disposal.</li>
          </ul>
          <p>By properly recycling light bulbs, we can reduce waste, protect the environment, and recover valuable materials for reuse.</p>
        </div>
      }

      {
        mostMatched.label === 'batteries' && (
          <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
            <h1 className="text-4xl text-center font-semibold">Batteries, Non Biodegradable</h1>
            <ul>
              <li>Batteries contain materials such as lead, cadmium, steel, zinc, mercury, lithium, cobalt, and rare earth materials that are highly toxic and corrosive in nature. Plaguing landfills with wasted batteries is hazardous for the environment. It could cause mercury poisoning and contaminate the environment with toxic pollutants. Thus, one of the prime benefits of recycling batteries the right way is to keep the toxic chemicals in batteries out of landfills and far less exposed to the environment.</li>
              <li>The demand for batteries is on the rise. Do you agree? Besides, the growing use of batteries implies increased mining of resources and hence, more wastage. Battery recycling India ensures that the majority of the materials in a battery are salvaged and repurposed. This naturally reduces the need to mine resources for newer batteries.</li>
              <li>Lithium-ion batteries contain a host of combustible and hazardous chemicals. Are you aware? Battery explosions and fires, although rare, are definitely possible. What's worse? These explosions are very hard to extinguish. Simply put, it is critical to handle and dispose of batteries with care. Mindless scrapping of batteries is more than just an environmental issue. Hence, understanding how to dispose batteries in India is important. Also, recycling the spent batteries ensures that fewer batteries are trashed in the open, causing lesser harm.</li>
            </ul>
            <p>By implementing these tips, we can reduce battery waste, conserve natural resources, and promote a more sustainable future.</p>
          </div>
        )
      }

      {
        mostMatched.label === 'radioactive' && (
          <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
            <h1 className="text-4xl text-center font-semibold">Radioactive, Non Biodegradable</h1>
            <p>Reducing radioactive waste is a crucial aspect of waste reduction and environmental sustainability. Here are some key points to consider:</p>
            <ul>
              <li>Nuclear waste is a significant environmental concern due to its potential to cause harm to living beings and the environment. Here are some key points to consider for solutions for nuclear waste.</li>
              <li>Reprocessing: Reprocessing is a process that separates nuclear fuel into reusable and non-reusable materials, reducing the amount of waste generated. However, this process is controversial and has potential security risks.</li>
              <li>Geological disposal: Geological disposal involves burying nuclear waste deep underground in specially designed repositories, isolating it from the environment.</li>
              <li>Transmutation: Transmutation is a process that converts long-lived radioactive isotopes into shorter-lived isotopes, reducing the potential harm of nuclear waste.</li>
              <li>Spent fuel casks: Used fuel rods can be stored in large steel and concrete containers called spent fuel casks until a permanent solution is found.</li>
              <li>Reduce nuclear waste production: Reducing the amount of nuclear waste produced can be achieved through various measures such as the use of advanced nuclear reactors and improving nuclear fuel cycle efficiency.</li>
            </ul>
            <p>By implementing these tips, we can reduce radioactive waste, conserve natural resources, and promote a more sustainable future.</p>
          </div>
        )
      }

      {
        mostMatched.label === 'organic' && (
          <div className="mt-4 text-2xl m-10 border-2 border-gray-300 p-5">
            <h1 className="text-4xl text-center font-semibold">Organic, Biodegradable</h1>
            <ul>
              <li>Organic waste contains nutrients that can be used to improve soil health and support plant growth.</li>
              <li>When organic waste is sent to landfill, it produces methane, a potent greenhouse gas that contributes to climate change.</li>
              <li>Composting is a process that breaks down organic waste into nutrient-rich soil amendment that can be used to support plant growth.</li>
              <li>Composting can be done on a small or large scale, from backyard composting to commercial-scale composting operations.</li>
              <li>Organic waste can also be used for biogas production, a process that produces methane that can be used as a renewable energy source.</li>
              <li>Other forms of organic waste, such as food waste, can be used for animal feed or converted into other products, such as biofuels.</li>
            </ul>
            <p>By managing organic waste as a valuable resource, we can reduce waste, support plant growth, and promote a more sustainable future.</p>
          </div>
        )
      }
    </>
  );
};

export default WasteType;