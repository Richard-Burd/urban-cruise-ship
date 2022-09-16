import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpecializedSiteButton from "../components/SpecializedSiteButton";

export default function Home() {
  const specializedSiteBlockHeight = 300;
  const specializedSiteBlockWidth = 510;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://urbancruiseship.org/">Urban Cruise Ship</a>
        </h1>
        <div className="grid grid-cols-3 gap-x-4">
          <Image
            src="/images/specialized-site-buttons/energy.svg"
            alt="Energy"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/matter.svg"
            alt="Matter"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/habitat.svg"
            alt="Habitat"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/cities.svg"
            alt="Cities"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/waste.svg"
            alt="Waste"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/oceans.svg"
            alt="Oceans"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/space.svg"
            alt="Space"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/costs.svg"
            alt="Costs"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
          <Image
            src="/images/specialized-site-buttons/history.svg"
            alt="History"
            height={specializedSiteBlockHeight}
            width={specializedSiteBlockWidth}
          />
        </div>
      </main>
    </div>
  );
}
