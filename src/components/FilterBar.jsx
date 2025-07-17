import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../features/filters/filtersSlice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const { sortOrder } = useSelector((state) => state.filters);

  return (
    <div className="flex justify-end items-center w-full mb-4">
      <select
        value={sortOrder}
        onChange={(e) => dispatch(setSortOrder(e.target.value))}
        className="border p-2 rounded w-full sm:w-48"
      >
        <option value="default">Sort by</option>
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
