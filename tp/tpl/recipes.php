<?php
$i=1;
$items = $_POST["items"];
foreach($items as $item) {
    if($i == 1) echo "<div class=\"row\">";
    ?>
    <div class="col-md-4">
        <div class="thumbnail" data-energizing="<?php if ($item["energizing"]) { echo "1"; } else { echo "0"; } ?>" data-cooling="<?php if ($item["cooling"]) { echo "1"; } else { echo "0"; } ?>">
            <div class="caption <?=$item["name"]?>">
                <h3><?=$item["display-name"]?></h3>
                <?php
                if ($item["energizing"]) {
                ?>
                    <img class="energizing" src="img/energizing.svg"/>
                <?php
                }
                if ($item["cooling"]) {
                ?>
                    <img class="cooling" src="img/cooling.svg"/>
                <?php
                }
                ?>
                <p class="description" data-description="<?=$item["description"]?>"><?=$item["description"]?></p>
                <p>
                    <button type="button" class="btn btn-primary" role="button" data-recipe="<?=$item["name"]?>" data-toggle="modal" data-target="#originalModal">Plus d'infos</button>
                    <button class="btn btn-default btn-selection pull-right" role="button">Sélectionner</button>
                </p>
            </div>
        </div>
    </div>
    <?php
    if($i == 3) {
        echo "</div>";
        $i = 0;
    }
    $i++;
}