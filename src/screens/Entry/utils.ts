import { IndexPath } from '@ui-kitten/components';

import { MEAL_CATEGORIES } from '../../constants';
import { TMealCategories } from '../../types';

const getCategoryIndexPath = (category: TMealCategories): IndexPath => new IndexPath(MEAL_CATEGORIES.indexOf(category));

export { getCategoryIndexPath };
