import React from 'react'
import styles from './Friends.module.css'


const Friends = () => {
  return (
      <div>
        <p className={styles.title}>Friends</p>
        <div className={styles.item}>
          <img
              alt='#'
              src='data:image/png;base64,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'
          />
          <img
              alt='#'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAACvCAMAAABqzPMLAAABOFBMVEX////w8PDv7+9Vlp2iQyMogIX29vb5+fn9/f3y8vLt2bTcxaG8n4L09PQgfYPdx6Nhmp40IhRRlJtQmqKgPRygPh1IkJieNxOkPxvx4LqmTi8Ad3ylPhimPBSeNxRcmqGRWkg2h4udMwCfvsJuo6mpVTaCrrPDkXC6eFlphIRyfHnPqohZkZbs1rF3d3JCjZHG1tfr5uStXUXj1dHCiWm1bk+fRieOXk/cupfPooF+cGiWUjtjiowiCQAoEwCIZ12cSzLX4OHJLibIro6yaFO5eWaWu77O3t+50dLdvrbPppzGk4bQsKfDk4bhyMGwYkyEal+MSC1VKhdZSTcjCwATAACHdFxDMSKkk3gyHg0dAABpV0S5p4nmu5vLf2nEHRvVln3SGhTXbVnWSz3e18Taz7ehcmJSb20+1x3EAAARx0lEQVR4nO2dCXvaRhqAJQQCQYQcGRCHgYJt7MQhPmKnOM2mIY6Nc2530zRNm7bbNmn//z/YOSQYzSWBRxyuvydPYoE/NHrznTMjoWlITB2KhQ8sdGDigxT8OZVFP+fwQQ4dZPHBddfXln2Ai9a/AXQD6AbQXACloAS/gA6CEyAJToAkOAGS666vmUiyWIQHZsTB9dXX9HgmCA8mhOHBdCa8qvp6XEBLGyMS1r8BdANoToBS9AlmiAGrqK9rFpJsDgk+wD9nyQMT/WzjAxsdmKSKIn2cQNBYF3J+jr4WEF50HWLZ5uGDFy9fnZ+fv3rz+kHKzM73/MI6yP+FBceInPX2zdFGt+t5VSBes1s9fzHP8y97q/Hg1UbXK6dJKXW7L3M3gJD+26Oul+aI131xA8jS3m53yzw8ULrnmm3b1jIAWkyQ1s0H/xbjgUZ09PLlCxCxc8mcP06QXmSa13KvuiUJHiBlELC75fO3lmkvKM3r8UwwkULtwXZTjieQarf+GnjaQgrFmICS8PGXUu+iLKl79MBc5lZDOSDLPO/GxoMRvc7+gwBZh9vc1C6T7pslBgQPFE5Y2YfliOjMJfRK1fmniEELmfLMHpbihx+S0Ett7lOuAeG51kGH6Zn4AEIv7H9As6qZ9Rn8yyd0aF37VkPPHlWjOAgNrPrcvO6AQH6PzF+loyOhCb22rzcg23wTWf+UjgYt4ZvVa92sWublnUg+rZPatjiIezjXzy1IJ5KlBPq2NmpXovCkvd3aqcwJm4d6Yv+BHH1deRAW6tvDXmX9q6gA7R3X+tLf8d5kk4yRC2s1LGuz4q7fjerfvZ1a7UReBXibunX9AJnAuwzDeBjF57QmdzAgG4/aI/O6AYLmYxjr30U4WOu0lndY+ymHY/ZTt7JpzwvQfIJ0aguaj3Evis+ek68dMRmstBt+rXnHqGylpjn/FcY/j/03uZHrQj7rX8sBlfacQm2HcbByvbYTsqrq1+uG645yiTXTxIEWENaVTmeE9O1NZD6G8XhDzmfgFJwBWya1nNogTK0KPw24WWLTMRP9ANDVs5RI37J6Ph+5AZXTgE+hwP6KN6jl8+G41LyLCPUsa/VbDSu15WI+8giE+DgOW0KDvJbP105Cr0MfA+JuBf/pKwwo1Q74SFNYuQ7tx9llMhioi/IA0Gm4OSsjQIbbnl8vRv+ComUV0wj4SGugcr0A+ewwPSqoq/NQ+uHQ1HyMP9I17GTHDzfi4IU1uMQ7XliDB8HCmg0PsuRBsLBGHAj0NYvgIymifT5shQj6MsQnX6uHXq8+Wg8IWVpy44eXkGQdYU38C3jYV8IO3eczYPyrFfDJ145Db5a/8QFBL7NWtVkN8THuCXO8z6fAzCOO7QcIleibASBMaCVbDd3aIvis3xUBwnwKbAIj+eRr4feCIIRymaWvJCC7R/ARe1h5G9mPc0Q7WBCfuT62cX99QqhnryIgLaiffREYEOZTcJgpDpzf8wIf8yshLJVNLTlAiQXpUZjPHX4OC/js0gne2wvzyefD7z8lABmVkfrxB/oR+2ci9w9pfH17GOYjqBJLAj7l8oDmQ/lYNfTxbspWO/7x/iEtIEyb4BULLZsM0BDQN7wQFPA5pvi0tvs0H9rHNh6HAG3ZasefdLNqUgHIWOd5WMCHLqC9XYYOlFCa27hL+hgIQ+Yq9WIWFYAM4zEH0JhPuMQpo/aUlVqIY/W7ECAQhqxVAtQOO5ixfp9NYoBPgcOnVC9w+eTzTgjQ12FAbjtZQEonnGzawYz1b6tpKo+Xjrh8BO6FTCiY8yh5JaLZGDuZnciEWQJTltkhzQeUidXyTj3Mx+HwKZWZ7M6G6dJOAUT1hxQgozLMqhl/eMo1gTpI67kMoIfensPjcxzi452I3AsLRtzaq4F4VL1HncPtaavRrLIRGkjzxCkQPtY6cRyGT6t+6hRkfPxpM28AW7NwnkcmNLJUjD/xVsPaYgzIuNc9JQFhPk6oPixVj2FSkwHyq2mvD8vG7h36JLBrXQFA9iXHgB53B05hTMPbZfiUvd0BMiopHz/TQ0Cn3bt0EDIql/YKAGJSPJQ7JCDvGMefk9YEzwla0ogClO+3YPsG49Re9xEDyG0nAEh1kLZ4BrR+HwLyuzFvB4Wfwnh+A+Hx+YQBMREbmlAJThMBC/qOAQRMyFIepNV8AKHPiUAQ0J5TQFVMGS6fQj7b45D0TWGMJwSo9umTwyAqpVtwHqS20/yWBeRuXX38Se9yZWsgCOhRE5gNCsVoeafgDNJl0LKXWvX//Pf2k3eFAg/Qu5++f/8jRah26sEkBopGupTGJjS86vhpfeWA2BoIAdoAdU8dpi/UfhUGD9Pp+vbuzqDwr9u3b3//A8eCaj/At947tJNtt/rwX6/8FQcQqIWWHJDJMyA4G9QqONul1g7hTA6UH54ACrc/8Fzsw0fIjjah/CCNYrTH9BrYhLJLDogXolErVjp2jrYHJB70Nwb0kedikM/tJwygGvKwo7IA0OWS73Ll5Xjcq5YLe4UJnwDTj9CPPr7judg7SOinT3SUxmbkUZOuYx9rqw7SKvb/TFS4Idpv5ncZPJDQhye3P77/xHOxT++BAX3g92b1sgAQCNPL/Pwga5NrQAhQ2jvlESr8/K8PPxJvEL706cNPP/d5eGpoipYPyN201N4OFRNQvBhl8z0MA4Ib7Hg25DjkyyQHIFw+eIpEAKit9FYFtYD4RdAYUBomMYdrRlxAPDbwjz8FwAeES6FlBcTMJAaA/EWf1vbO3ulVAB0PBjt13MLxsxjOYwsAJFwWCQHitRkI0CO/Dyu3Wl1+KIoDCDRgnhd0uCJAuN2YafxcQHb8/TN2sLBmC/bfZAV8JoDghW3PDohc+OFW0kiys46fc/14f5aiOsgShaDwokZLakIyPnvk/CO3F0M+NlR5s0sAaFYfDd2swi+jaUBpqQnJLKhOrhxWOd08BoSmzZax1bC5jSqS0Oag1o6EkCwChfd3cOaDkLi9pQUkitGGcSe8bsj2HDEA9cOr+1V2RtEHtLWkgKyUkA+1x57fdUQAqlFbhMktVJSkLPWAFARpXRijmQ2KHremlgKi70aAd7QIBEdpVUF6qv0z6EAT7L+ht0yRsk7tDnoodDKhg6UpYdfFxoBG2izjF1y/Hs8E4xRawiQGV1bDV1c6mRIQexcis7I6AXQ52/gTbzUErTwCRG/h9PiZTLSyyrkLkVmbH4u7Odv4EwckzvJBtyoPQ6CRPS30f+G08EwAEncaENDFCgJ6xGxRLNNhyBn8+uw3IM/+x5hRn92/J6wT/Zn7RTSrURNO4jKIt428vM1Y0K+/P3v27Lfff6FNqF/nABJnedyuLuHzgwSzZUg4W/D8HVQkodM//vzzD4ZPntljDmRDmOUNd03llGtA+Mp1kJ5qi/lwN3GyqQxEIU4E4t5GvyFMYobbBmawhM1qSsLHWH/KuUhesmcz2An3QSfiJIYALWOrIQfEvV8VeBmNiInPPP+STHYgSa0gIDaNIUJ1mhCV3/uCh1UJW9VVBSS8VyNN1UNU/SN6FlVT2GgAScLFVARpKSBDdEMmVVOH+Iif4rEhMSC3nVIYpK/6AYS+LM0LbtZAciYA1D8TaUgmpI1JHTTt+BPf5SopFGU3hddv3ZpsMCMAObdu1QUqsskgfqE4awhR2mpIAYmCEAJ062y8yWxiPrckgJriKmhBrUacE0h6MSgSC8KICEAIjxiQpFM1lrhZlUx3GJKbVjEggGgQ7JN2zvyXRIDkSV7tdIfCIC2ZMDP4N/xgQIVbgZydgYB9Nj50RICkSX48YaYmSF+1mZv8nD2QAhLeOF93JoRIOevXBIDkHmZUDrKzjJ9/oAWE9dmmA4jpBPHCqm9CgkRfBy3qGcunwDyPYizSHAYn7a1Zxp/484Nkyz4IkMDH6ig6U4jOUKEoACSejsaSxLKPAkC6vSYndE9kQWimg0R0hjeWCQBJJhOhLO3CoWzpGZsQ/wlUdb8CcgqDMxSox1ujBYDkITqhpedZl0VIH2bvxKSEXyvWJ72YE17V4AOSthkGumFjtvFLnx9k0/tn7Omev4NUIqK0IEzXxc0qF5B4SdUHNJx1/LzrV3q3j3ADVQCI+wSYKQFF5Hggy3tLZkQ3Jph4fTgdoCgDwp3YUrYaUc0GNCE2CnnPhYDyz9n5oGpEBFrUJs54gKKCEDAh5ilKz7VD0XxQSmMJSVYzfEBLvA04x70dMyR0IgN8NO0zF1D/M3iLJrQhbVONBDaSqwzSOesiChD1wG3ER8txb0XIo3GECZUFu8cJQJNbEdQEaZzLePtntHj7Z0L6kT4Wfhwn5gOGzAHU93fghghF1IgG8rArjJ+5fgxLUaGoC2+HIk3o/sTJmuf+6YkwNOZzGLx3TihEORi+HeoK42euPwA0q4/SPh6Vx0gnm/DRtC8UIBSAaEKRGSzBG+pUAbIjfcwwHpYZPlqOtqAc8aZPqPwwKoOtwC2ZURPTUB5XGT7gPCFA/VToTUyoGhmAErypV8GEGdaX7OQMBJWLzb+0sHwmAJEOhuSvJtzwEulg/m3hVxk/ra/8+UG5yDCNAvXTv4tDCsKXCaAv1FvD4t9PmzH4uFvKv39sPo+mYAj9nckU9ykK5gSQSb21X8xkHkfzMSoH6h9NoV/RRxkTjq6m224GSuOCwnDoA5pkeF8uGkihItuhhQwoiYebKAckvufHx1PJFDOY0IgC8RkBYgLQCPMBahGIVuPxOFITahv7mbEUO2Qu13DLQWV4+GqnONHZN8SM/Mno5QckXB9ru+S1AhPqUbYCcn2+b1Ev9hqkTrHjihAl84gu1UE6xX3IG4eOwMnyIgeLZJTQQ97UfEBInzM33Xb3GTroWoOVy0C+0Bk+y9fbZxlVhraa8Sf/LZnmBUGoDeCwthNc6BbFQ6cdbEuo2gGQCErEgyavOn5SPxFAuu7H6bbhVjoZ0SUiJ7sMjYNYDcdyyTgYySjTqRg+pKQfVaoWEIrT0HKkcDAhmxhGDpzUJJOYHamPIeEF+dUBpJsX7n40HHSBawQflNV6BKG1eJ+R2XeTflyyyiAN9HWbH5Q50tic4DDg38YE2abMwUKIOrae0LdkXrWZE6jkUnGvLdMIUulaY434B17cFJ+RUzv+8UFyX6d+EPt/3+9atxrY3daKDT+3xbfCS/XjT66S9vWpClh2eReYTyYAlMGELmJ/gF+RKx1/4oCytrCEYS5wiHGOAaFLHsY2wbWV/OKRrK7HdZFiB5vbBBAkJKwuae19fQm+uiZFnyCGD1up+NdYzIQBBS/FoRvny49mGT8GhDfD8PbP2LH2z1gSfTMVrxYaXysBKLZOZmgmNX7Vzw/i6OvFaa52BkDFYirJ8Y9FdSU91p+K0PSAfD7JjT9xQFrsODQLoGJnmPT4EwdkpWKXe1MDKu5fh68RtfS1+AXNVIAaa/r8vog2sSAHG9e4NfV0gBo92KAmPf5g/4xG75/R4u2fiaOvaZfxQvU0gIrFS7iHOfnx6/FMcNZCy9cfxgpEUwAq7g+ncqHZC8WYgK7o41krjpvFB9ToWdmpAM06/nkBMnXzILqqjguomDkwlSWRZQGk28CIIi49HqAiMB9bXZZVBGjWCSdS3xxGJPxYgBprQ3O28y/8+UGR+lntsiNdxokG1OhcarxPTmz8WkA4uTqI1LetzY7Y0aIAFRudTctOYml5cc0qow8Q7YsQyQEVG/ubMPgkFCMF+nMHBBBpozU+IhmgYmNtpKnf3rKMgKB+6oLnaUJAwLcuUgln2eUCBGTUyzSoDoQLqFhsZHoj9edf1Dbg2Po52xxduA0SEgMIwGm4FyPTv4En4TKEvw1YbZaaXv/gYqsDMABOQHxAUOBLna2Lg6TPH6mvJ+VCcSfUbNNMjS43e2vufgcD6uy7a73Ny1HKNIMtPwsIAXNvNST6ln+Ll0aq5CxrXudfekBjffSGvrjzLz2g5dNPZJfr9dJX2YxeR30tIKzPuw5aEf0A0KrGiGvcaqyI/g2gmIBS9C+ouq161fVDzw8yOQeh/TPkLhvO/pvrqL/8dcii9fUVjxFJV9L/B0HAfExyfvGqAAAAAElFTkSuQmCC'
          />
          <img
              alt='#'
              src='data:image/png;base64,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'
          />
        </div>
      </div>
  )
}

export default Friends