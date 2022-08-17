export const VolumesQueryBuilder = (options: VolumesQueryOptions) => {
  return Object.entries(options).map(([key, value]) => {
    if (value) {
      if (key === "q") {
        return `${value}`;
      } else {
        return `${key}:${value}`;
      }
    }
  }).join("+");
};

export interface VolumesQueryOptions {
  /**
   * Free word search
   */
  q?: string;

  /**
   * Returns results where the text following this keyword is found in the title.
   */
  intitle?: string;

  /**
   * Returns results where the text following this keyword is found in the author.
   */
  inauthor?: string;

  /**
   * Returns results where the text following this keyword is found in the publisher.
   */
  inpublisher?: string;

  /**
   * Returns results where the text following this keyword is listed in the category list of the volume.
   */
  subject?: string;

  /**
   * Returns results where the text following this keyword is the ISBN number.
   */
  isbn?: string;

  /**
   * Returns results where the text following this keyword is the Library of Congress Control Number.
   */
  iccn?: string;

  /**
   * Returns results where the text following this keyword is the Online Computer Library Center number.
   */
  oclc?: string;
}
