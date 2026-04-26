---
date: 2026-04-26
title: Aspirin Production Simulation
linkTitle: Aspirin Production Simulation
author: Aarya Dani 
resources:
  - src: 
    title: 
    params:
      byline: 
cascade:
  - type: "docs"
weight: 1
toc_hide: true
---

<video width="1000" controls>
  <source src="/videos/ASPEN Video CHE 400.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Executive Summary

This report models a Continuous Stirred Tank Reactor (CSTR) for producing Aspirin from salicylic acid (SA) and acetic anhydride (AA), with water as an impurity. The primary objective was to minimize reactor volume while maintaining less than 0.15 wt% unreacted SA in the product stream to meet pharmacopeia purity standards.

Model A used manual kinetic calculations to determine that to achieve a 95% conversion of SA, a 1340.5 L CSTR is needed. However, Model A only considered the primary reaction, excluding side reactions. Model B used Aspen Plus to numerically solve for the volume at which SA reaches 0.15 wt% in the product stream, accounting for all reactions including side reactions. Model B calculated a minimum volume of 1,600 L. When running a simulation on Aspen Plus, all reactions, including unwanted side reactions, must be taken into account. Model A only takes into account the main reaction between salicylic acid and acetic anhydride, and it excludes all side reactions. Since Model A does not take into account the effects that the side reaction will have on reactor sizing, the volume calculated in the analytical calculations will differ from those found in the numerical calculations.

A sensitivity analysis over 330–390 K conducted in Aspen Plus showed that higher temperatures increased conversion of both the desired and competing reactions. This means that as temperature of the reaction increases, there is a tradeoff between conversion and selectivity. Finally, two CSTRs in series at the same total volume as the single CSTR were simulated in Aspen Plus and showed notably higher productivity. This is due to the fact that a series configuration models plug flow reactor (PFR) behavior, which tend to be more productive.

---

## 1.0 Introduction and Industrial Background

Acetylsalicylic acid, or Aspirin, is one of the most consumed drugs in the pharmaceutical industry, widely used as an anti-inflammatory, fever reducer, and pain reliever. Aspirin is traditionally produced through batch processing, but the industry is transitioning toward continuous processes using CSTRs, which are safer, less wasteful, and more consistent in product quality [1]. CSTRs operate at steady-state outlet concentrations, reducing side product formation by maintaining lower reactant concentrations throughout the reactor.

Aspirin and acetic acid are produced through a reaction between salicylic acid and acetic anhydride [2]. A competing side reaction between acetic anhydride and trace water impurities in the feed produces additional acetic acid as an unwanted byproduct.

The engineering problem addressed in this report is determining the smallest reactor volume capable of meeting the pharmaceutical purity standard of 0.15 weight percent salicylic acid in the product stream. Unreacted salicylic acid can cause significant patient irritation, making purity compliance critical. Minimizing reactor size is important from a cost perspective, as smaller reactors are more economical to build and operate. Therefore, identifying the minimum reactor volume that still satisfies the required purity standard is a key design objective in the development of an efficient and compliant aspirin production process.

---

## 2.0 Kinetic Analysis: Manual Baseline

Model A consisted of manual calculations to determine the reaction rate constant at 350 K and 370 K and the initial concentration for the reactants to find the volume of a CSTR at 95% conversion of salicylic acid. First, the reaction rate constants (*k*) were calculated at 350 K and 370 K using the Arrhenius equation. The rate constants were found to be 0.49 L/mol·min at 350 K and 1.28 L/mol·min at 370 K. From this, it can be assumed that the reaction will proceed at a faster rate when run at a higher temperature.

Next, the initial feed concentrations ($C_i^0$) were calculated for salicylic acid (SA), acetic anhydride (AA), and water (H₂O). These values were calculated using Equation 2.2:

$$ C_i^0 = \frac{F_i^0}{\dot{V}_{Tot}} $$

The flowrates for each reactant were given, but the volumetric flowrates had to be calculated using Equation 2.1:

$$\dot{V} = \sum \frac{F_i \cdot MW_i}{\rho_i} \tag{2.1}$$

The volumetric flowrates of each reactant were added together to get $\dot{V}_{Tot}$, which was used to calculate the concentrations of the reactants. The initial concentrations calculated were 4.186 mol/L salicylic acid, 6.28 mol/L acetic anhydride, and 0.209 mol/L water.

The last calculation made for Model A was to determine the volume of the CSTR when salicylic acid is at 95% conversion. To find this value, the rate of the reaction needed to be calculated. In this rate equation, $k_{SA}$ was the rate constant for salicylic acid that was previously calculated, and $C_{AA/SA}$ are the outlet concentrations of salicylic acid and acetic anhydride. The values for the concentrations of SA and AA were found with Equation 2.3:

$$C_i = C_i^0(1 - X_i) \tag{2.3}$$

The objective of Model A was to calculate the volume of a CSTR with 95% conversion of SA, which can be found using Equation 2.4:

$$V_{CSTR} = \frac{-F_{SA}^0 \cdot X_{SA}}{r_{SA}} \tag{2.4}$$

Using this equation and the values calculated in earlier equations, the volume of the CSTR when salicylic acid is at 95% conversion is **1340.5 L**.

---

## 3.0 Simulation Methodology

Aspen was used for the complex Model B kinetics, providing a realistic numeric solution that could not be calculated by hand. To convert the manual hand calculations to the Aspen Plus environment, the components of the reaction including salicylic acid, acetic anhydride, acetylsalicylic acid (aspirin), acetic acid, and water were uploaded into the software.

The Aspen model was run under the NRTL property method. This was verified by the Aspen Methods Assistant, which recommended the NRTL method over the Peng-Robinson method. NRTL was the superior model for this system because aspirin production involves highly polar liquid mixtures that operate best at low to moderate pressure. For this specific reaction, it was recommended to run pressure at 1.5 atm. At low pressures, the vapor phase behaves ideally, so NRTL can put all of its focus on capturing the non-ideal liquid-phase interactions between the polar molecules in the system. Since the pressure is low, NRTL is the stronger property method to run the model under.

The Model B kinetics add a layer of complexity by introducing a side reaction. Both the main and side reactions were modeled using power law kinetics. Power law kinetics assume the rate of reaction is equivalent to the rate coefficient multiplied by the concentration of the reactants raised to a specific order, *n*, which is determined by stoichiometric coefficients. This is similar to how the main reaction was modeled in the hand calculations. Finally, the rate coefficient was determined using the Arrhenius equation just like it was in Model A for the hand calculations.

In both models, the main reaction is evaluated as an irreversible reaction, and in Model B, the side reaction is irreversible as well. This is a valid assumption if the concentration of water entering through the diluted feed stream in the reactor is strictly monitored and kept to a minimum. If too much water is introduced in the feed, it could drive the reverse reaction and would invalidate the assumption of complete irreversibility.

---

## 4.0 Results and Sensitivity Analysis

The initial reactor design was estimated using the simplified Model A kinetics, which neglects side reactions. Based on these assumptions, the required reactor volume to achieve 95% conversion of salicylic acid at 350 K was calculated to be approximately 1340.5 L. However, Model B was implemented in Aspen Plus to determine the volume of a CSTR reactor needed to meet the 0.15 wt% salicylic acid purity constraint. This target volume was determined to be **1600 L**, which was found by increasing reactor size until the wt% of SA reached 0.15.

This increase in required reactor volume is due to the inclusion of the side reaction, in which acetic anhydride reacts with water to form acetic acid. This pathway reduced the availability of acetic anhydride for the desired esterification reaction, effectively lowering the rate of aspirin formation. As a result, the reactor volume predicted by Model B is significantly larger than that predicted by Model A. This comparison highlights that neglecting side reactions leads to an underestimation of reactor size and overprediction of process performance.

To further analyze the system's behavior, a temperature sensitivity analysis was conducted over the range of 330 K to 390 K, evaluating both salicylic acid conversion and aspirin selectivity, as shown in Figure 4.1.

**Figure 4.1: Reactor Temperature (°C) vs Selectivity and Conversion**

Figure 4.1 shows that both salicylic acid conversion and aspirin selectivity increased with reactor temperature over the 330 K to 390 K range. However, the conversion curve increased more rapidly, approaching near-complete conversion at higher temperature, while the selectivity curve increased more gradually and remained slightly lower throughout the range. This trend can be explained by the Arrhenius behavior, where increasing temperature raises both reaction rates, boosting aspirin formation but also the side reaction of acetic anhydride. Overall, this reduces the efficiency of aspirin formation. As a result, a portion of the acetic anhydride is diverted away from the aspirin formation, limiting the overall selectivity. The increasing gap between conversion and selectivity at higher temperatures indicated that the side reaction becomes increasingly significant as temperature increased. This reflects a trade-off between reaction rate and selectivity, meaning the optimal operating temperature must balance high conversion with efficient reactant utilization rather than simply maximizing temperature.

Reactor configuration provides another opportunity to improve performance without increasing total reactor volume. Figure 4.2 shows a comparison between a single 1600 L CSTR and two 800 L CSTRs in series configurations in Aspen Plus.

**Figure 4.2: RCSTR Flow Diagram**

The series configuration achieved slightly higher conversion, reducing the salicylic acid flowrate from 0.0631 kmol/hr in the single reactor to 0.0008 kmol/hr after the second reactor in series, while aspirin production increases marginally from 19.937 in the single reactor to 19.999 kmol/hr in the second reactor in series. Since salicylic acid is the limiting reactant, this decrease directly reflects improved conversion.

At the base flowrate of 20 kmol/hr, the difference between the two configurations is relatively small, as both systems already operate near high conversion. To better highlight the effect of the reactor configuration, the inlet flowrate was increased to 400 kmol/hr.

Under these conditions, the single reactor left 21.42 kmol/hr of salicylic acid unreacted, whereas the series configuration reduced this to 4.17 kmol/hr after the second reactor. Similarly, aspirin production increased from 378.58 kmol/hr in the single reactor to 395.83 kmol/hr in the series configuration. The reduced residence time at higher flowrates led to a lower overall conversion in both cases, but the performance advantage of the series configuration becomes significantly more apparent.

This behavior can be explained by differences in concentration profiles and reaction rates. A single CSTR operates at low outlet concentrations, limiting reaction rates, while reactors in series maintain higher concentrations in the first reactor, increasing the reaction rate and driving the reaction further in the second. Additionally, faster consumption of acetic anhydride in the first reactor leaves less available to react with water in subsequent reactors, limiting its reaction with water and improving selectivity toward aspirin.

Overall, including side reactions increases the required reactor volume compared to Model A and introduces a trade-off between conversion and selectivity with temperature. CSTRs in series outperform a single reactor, especially at higher flowrates, by improving conversion and limiting side reactions.

---

## 5.0 Engineering Reflection

The real-world constraints of the CSTR-in-series design requires balancing conversion, selectivity, and safety. While conversion and selectivity peak at 390 K, operating near this maximum is dangerous and could cause the reaction to exceed the temperature limit, increasing the risk of thermal runaway. However, aspirin begins to decompose around 363 K before thermal runaway occurs. Therefore, the ideal operating temperature for aspirin production is between 343 K and 363 K to prevent decomposition, maintain compliance with pharmaceutical quality standards, and optimize reactor performance under practical constraints [2].

A second limitation of the Aspen model is its assumption of isothermal conditions without accounting for the system's moderately exothermic thermodynamics. The feed temperature is 350 K, the same as the reactor temperature, so a cooling jacket on the CSTR would need to remove 100% of heat generated by the reaction. If the heat from the system is not continuously managed, the reaction temperature will rise, leading to product decomposition and expensive quality concerns. For these reasons, running the system at adiabatic conditions is not very practical.

A final concern is equipment corrosion due to high concentrations of acetic anhydride. Most pharmaceutical companies use stainless steel reactors because they are highly resistant to corrosion. However, acetic anhydride can still degrade stainless steel at high concentrations [3]. Diluting the feed could be a solution, but this would decrease product yield and introduce water into the system. Water drives a costly, unwanted hydrolysis reaction that reduces the quality and conversion of the product. Therefore, the feed concentration must be low enough to prevent equipment corrosion, but high enough to maintain product quality and avoid expensive unwanted side reactions. Finding this optimal balance is critical for this reaction.

---

## References

[1] Chen, W.-C.; et al. Flowing to purity: Advancing Acetylsalicylic Acid Production from Batch to Continuous to Full-Flow. *Separation and Purification Technology*. 2025, 369, 133107. DOI: 10.1016/j.seppur.2025.133107

[2] Biology Insights. How aspirin is made: The chemical manufacturing process. 25 Nov. 2025. https://biologyinsights.com/how-aspirin-is-made-the-chemical-manufacturing-process/

[3] Acetic Anhydride Safety Data Sheet; Jubilant Ingrevia Limited. 30 Jan. 2024. https://www.jubilantingrevia.com/uploads/files/154msds_0028GjGhs20Div.1sdsAceticAnhydride.pdf

---

## Appendix: Sample Calculations

**2.0 Kinetic Analysis**
**Rate Constants at 350 K and 370 K**

$$k = k_0 \, e^{-E_A/RT}$$

$$k_{350K} = 2.8 \times 10^7 \, e^{-(52 \times 10^3)/(8.314 \times 350)} = 0.49 \text{ L/mol} \cdot \text{min}$$

$$k_{370K} = 2.8 \times 10^7 \, e^{-(52 \times 10^3)/(8.314 \times 370)} = 1.28 \text{ L/mol} \cdot \text{min}$$

**Volumetric Flow Rates of Reactants**

$$\dot{V} = \sum \frac{F_i \cdot MW_i}{\rho_i}$$

$$\dot{V}_{SA} = \frac{20 \text{ kmol/hr} \times 138.12 \text{ kg/kmol}}{1440 \text{ kg/m}^3} = 1.92 \text{ m}^3/\text{hr}$$

$$\dot{V}_{AA} = \frac{30 \text{ kmol/hr} \times 102.09 \text{ kg/kmol}}{1080 \text{ kg/m}^3} = 2.84 \text{ m}^3/\text{hr}$$

$$\dot{V}_{H_2O} = \frac{1.0 \text{ kmol/hr} \times 18.02 \text{ kg/kmol}}{1000 \text{ kg/m}^3} = 0.01802 \text{ m}^3/\text{hr}$$

$$\dot{V}_{Total} = 1.92 + 2.84 + 0.01802 = 4.778 \text{ m}^3/\text{hr}$$

**Feed Concentrations of Reactants**

$$C_{SA}^0 = \frac{20 \text{ kmol/hr}}{4.778 \text{ m}^3/\text{hr}} = 4.186 \text{ mol/L}$$

$$C_{AA}^0 = \frac{30 \text{ kmol/hr}}{4.778 \text{ m}^3/\text{hr}} = 6.28 \text{ mol/L}$$

$$C_{H_2O}^0 = \frac{1.0 \text{ kmol/hr}}{4.778 \text{ m}^3/\text{hr}} = 0.209 \text{ mol/L}$$

**Rate Equation**

$$-r_{SA} = k_{@350K} \cdot C_{AA} \cdot C_{SA}$$

**Exit Concentration**

$$C_i = C_i^0(1 - X_i)$$

**Volume of CSTR**

$$V_{CSTR} = \frac{-F_{SA}^0 \cdot X_{SA}}{r_{SA}}$$

