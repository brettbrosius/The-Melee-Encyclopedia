import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const DashDance = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1>Dash Dance</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies vehicula pellentesque. Nulla
				dictum consectetur risus at fringilla. Morbi quis ipsum porta, maximus sapien placerat, posuere neque.
				Cras sodales fringilla diam at lacinia. Mauris at purus dolor. Donec hendrerit mi lacus, luctus dictum
				nibh tempus vitae. Praesent accumsan ligula et turpis consectetur, non volutpat orci pretium. Phasellus
				sem ex, ultricies sit amet hendrerit nec, consequat in risus. Nunc arcu nisi, feugiat sed mollis nec,
				dapibus a nunc. Aenean sit amet maximus neque, vel elementum urna. Vivamus a ante vel risus porttitor
				iaculis nec a turpis. Duis dui massa, sagittis in tincidunt nec, molestie ac ex. Nunc laoreet porta
				velit a rutrum. Nulla sollicitudin velit molestie magna sodales venenatis. Suspendisse sagittis, orci
				sed blandit imperdiet, quam arcu mattis elit, non tempor sem enim a eros. Donec condimentum porta neque
				ut facilisis. Etiam feugiat magna ut faucibus laoreet. Donec venenatis nisi ipsum. Donec mattis
				tincidunt ipsum in ultrices. Cras enim libero, tempus a placerat id, auctor a massa. Donec turpis nunc,
				pulvinar eget egestas vitae, accumsan eget velit. Mauris pharetra lectus commodo tincidunt cursus. In
				condimentum urna at consectetur egestas. Nulla ut enim enim. Proin faucibus non tellus eget facilisis.
				Morbi id neque efficitur, tempus nulla sed, ullamcorper sem. Praesent sem libero, commodo at orci id,
				semper dictum tellus. Ut nec pretium augue, non ultricies nulla. Quisque eu ligula eu velit sodales
				euismod vitae eget risus. Donec turpis purus, semper id odio ac, imperdiet consectetur risus. Maecenas
				sed tempus odio, et convallis ipsum. Morbi ut commodo turpis. Integer non lorem pulvinar, rhoncus lorem
				eget, posuere nisl. Sed dui turpis, scelerisque eu fringilla nec, blandit non dolor. Donec suscipit,
				ipsum a euismod sollicitudin, sapien felis rutrum libero, ac faucibus ante lorem ac risus. Curabitur
				sapien nisi, varius eu cursus et, blandit a mi. Donec nec justo elementum, feugiat quam a, rhoncus ante.
				Maecenas porttitor nulla lacinia, sagittis est ut, congue urna. Vivamus et ante nec arcu tempus
				ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate ex quis libero
				faucibus semper. Aliquam eu nibh feugiat est congue mattis. Sed dictum blandit nunc, at luctus tortor
				gravida molestie. Mauris porttitor, purus sit amet sagittis maximus, velit sapien feugiat enim, quis
				accumsan mi lacus ac ligula. Etiam bibendum finibus pulvinar. Sed maximus gravida est quis interdum.
				Phasellus eleifend nibh nec pulvinar volutpat. Aenean faucibus tristique dolor, bibendum varius lacus
				accumsan et. Integer rhoncus magna metus, id malesuada leo congue in. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Ut non ligula metus. Nunc sodales diam
				nisi, id luctus lorem aliquam non.
			</p>
			<p>My progress: {store.user[1].dash_dance}</p>
		</div>
	);
};
