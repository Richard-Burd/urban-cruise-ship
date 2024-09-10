const CostExamplesTable = () => {
  return (
    <>
      <table className="dynamic-table">
        <thead>
          <tr>
            <th>Area</th>
            <th>Externalized Cost or Benefit</th>
            <th>Proposed Action</th>
            <th>See Also</th>
          </tr>
        </thead>
        <tbody>
          <tr className="energy-table-background-color" id="carbon-dioxide">
            <td>Carbon Dioxide</td>
            <td>
              CO<sub>2</sub> emissions do harm to the environment and future
              generations
            </td>
            <td>Carbon tax</td>
            <td>
              <a
                href="/energy/energy_socioeconomics/carbon_pricing_e"
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy Pricing
              </a>
            </td>
          </tr>
          <tr className="energy-table-background-color" id="learning-by-doing">
            <td>Learning By Doing</td>
            <td>
              As a technology is deployed, costs fall, benefiting all producers
            </td>
            <td>Subsidize nascent technology</td>
            <td>
              <a
                href="/energy/energy_socioeconomics/policy_se"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clean Energy Deployment
              </a>
            </td>
          </tr>
          <tr
            className="energy-table-background-color"
            id="research-and-development"
          >
            <td>Research and Development</td>
            <td>R&D benefits all producers and society</td>
            <td>Subsidize or public involvement in R&D</td>
            <td>
              <a
                href="/energy/energy_socioeconomics/rd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research and Development
              </a>
            </td>
          </tr>
          <tr className="matter-table-background-color" id="diet">
            <td>Diet</td>
            <td>Environmental costs of meat production</td>
            <td>Meat tax</td>
            <td>
              <a
                href="/matter/diet/diet_fw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Impacts of Diets
              </a>
            </td>
          </tr>
          <tr
            className="matter-table-background-color"
            id="antibiotic-resistance"
          >
            <td>Antibiotic Resistance</td>
            <td>
              Use of antibiotics, especially in animal agriculture, creates
              disease risk
            </td>
            <td>Tax on antibiotics for livestocks</td>
            <td>
              <a
                href="/matter/ag_env/ag_risk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Risks in the Agricultural System
              </a>
            </td>
          </tr>
          <tr className="matter-table-background-color" id="water">
            <td>Water</td>
            <td>
              Economic and environmental costs of providing water often not
              priced
            </td>
            <td>Water markets</td>
            <td>
              <a
                href="/matter/water/water_usage"
                target="_blank"
                rel="noopener noreferrer"
              >
                Water Usage
              </a>
            </td>
          </tr>
          <tr className="matter-table-background-color" id="wildfires">
            <td>Wildfires</td>
            <td>
              Cost of firefighting is external to development in
              wildland-urban-interface
            </td>
            <td>Incorporate firefighting costs into development fees</td>
            <td>
              <a
                href="/matter/forestry/wildfire"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wildfire Management
              </a>
            </td>
          </tr>
          <tr className="matter-table-background-color" id="mining">
            <td>Mining</td>
            <td>
              Environmental costs of mining and clean-up are not reflected in
              mining costs
            </td>
            <td>Mining tax</td>
            <td>
              <a
                href="/matter/mining/mining_waste"
                target="_blank"
                rel="noopener noreferrer"
              >
                Environmental Impacts of Mining
              </a>
            </td>
          </tr>
          <tr
            className="habitat-table-background-color"
            id="ecosystem-services"
          >
            <td>Ecosystem Services</td>
            <td>Value of nature is not reflected in markets</td>
            <td>Ecosystem service tax for development</td>
            <td>
              <a
                href="/habitat/economy/valuation_socio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Environmental Valuation
              </a>
            </td>
          </tr>
          <tr className="cities-table-background-color" id="infrastructure">
            <td>Infrastructure</td>
            <td>
              Cost of infrastructure is not taken into account well in new
              development
            </td>
            <td>
              Development fees should incorporate infrastructure and service
              cost
            </td>
            <td>
              <a
                href="/cities/cities_land_use/cities_sprawl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Costs from Sprawl
              </a>
            </td>
          </tr>
          <tr className="cities-table-background-color" id="traffic-congestion">
            <td>Traffic Congestion</td>
            <td>
              Taking up road space imposes unpriced costs on other motorists
            </td>
            <td>Congestion pricing</td>
            <td>
              <a
                href="/cities/cities_mobility/cities_latent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latent and Induced Demand
              </a>
            </td>
          </tr>
          <tr className="waste-table-background-color" id="recycling">
            <td>Recycling</td>
            <td>Unrecycled material is a lost economic opportunity</td>
            <td>Tax on landfilling</td>
            <td>
              <a
                href="/waste/waste_economics/landfill_tax"
                target="_blank"
                rel="noopener noreferrer"
              >
                Landfill Taxation
              </a>
            </td>
          </tr>
          <tr className="space-table-background-color" id="orbital-congestion">
            <td className="light-text-for-colored-tables">
              Orbital Congestion
            </td>
            <td className="light-text-for-colored-tables">
              Satellites add an external cost in the form of risk of collision
            </td>
            <td className="light-text-for-colored-tables">Orbital Use Fee</td>
            <td>
              <a
                href="/space/ethics/orbital_debris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="light-text-for-costs-colored-table">
                  Orbital Debris
                </div>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CostExamplesTable;
